import { AxiosError } from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { iDefaultProviderProps } from "../UserContext/@types";
import { UserContext } from "../UserContext/UserContext";
import { iContact, iDashContext } from "./@types";

export const DashContext = createContext({} as iDashContext);

export const DashProvider = ({ children }: iDefaultProviderProps) => {
  const navigate = useNavigate();

  const { setUser } = useContext(UserContext);

  const [contacts, setContacts] = useState<iContact[] | []>([]);
  const [modal, setModal] = useState(false);

  const loadContacts = async () => {
    const token = localStorage.getItem("@token");
    try {
      const response = await api.get("/contacts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setContacts(response.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.data === "jwt expired") {
          setUser(null);
          localStorage.removeItem("@token");
          navigate("/");
        }
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("@token");
    if (token) {
      loadContacts();
    } else {
      localStorage.removeItem("@token");
      navigate("/");
    }
  }, []);

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <DashContext.Provider value={{ contacts, modal, handleModal }}>
      {children}
    </DashContext.Provider>
  )
};
