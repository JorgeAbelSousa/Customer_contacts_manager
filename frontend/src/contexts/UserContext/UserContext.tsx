import { AxiosError } from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import {
  iDefaultProviderProps,
  iLoginFormValues,
  iRegisterFormValues,
  iUser,
  iUserContext,
} from "./@types";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iDefaultProviderProps) => {
  const [user, setUser] = useState<iUser | null>(null);

  const navigate = useNavigate();

  const userRegister = async (formData: iRegisterFormValues) => {
    try {
      const response = await api.post("/users", formData);
      toast.success("Usuário criado!");

      navigate("/login");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(`${error.response?.data}`);
      }
    }
  };

  const userLogin = async (formData: iLoginFormValues) => {
    try {
      const response = await api.post("/login", formData);
      localStorage.setItem("@token", response.data.accessToken);
      setUser(response.data.user);
      navigate("/dashboard");
      toast.success("Você logou");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data);
      }
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("@token");
    toast.success("Você deslogou");
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, userRegister, userLogin, userLogout }}
    >
      {children}
    </UserContext.Provider>
  );
};
