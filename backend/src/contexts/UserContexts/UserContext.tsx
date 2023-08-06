/* eslint-disable prettier/prettier */
import { AxiosError } from 'axios';
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../../services/api';

export interface IUser {
  id: string;
  fullName: string;
  email: string;
}

export interface IRegisterFormValues {
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
}

export interface ILoginFormValues {
  email: string;
  password: string;
}

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  const navigate = useNavigate();

  const userRegister = async (formData: IRegisterFormValues) => {
    try {
      const response = await api.post('/customers', formData);
      toast.success('Usuário criado!');

      navigate('/login');
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(`${error.response?.data}}`);
      }
    }
  };

  const userLogin = async (formData: ILoginFormValues) => {
    try {
      const response = await api.post('/login', formData);
      localStorage.setItem('@token', response.data.accessToken);
      setUser(response.data.user);
      navigate('/dashboard');
      toast.success('Você está logado!');
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data);
      }
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem('@token');
    toast.success('Você deslogou!');
    navigate('login');
  };

  return (
    <UserContext.Provider value={{ user, setUser, userLogin, userLogout }}>
      {children}
    </UserContext.Provider>
  );
};
