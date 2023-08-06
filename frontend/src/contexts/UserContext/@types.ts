export interface iDefaultProviderProps {
  children: React.ReactNode;
}

export interface iUserContext {
  user: iUser | null;
  setUser: (value: React.SetStateAction<iUser | null>) => void;
  userRegister: (formData: iRegisterFormValues) => Promise<void>;
  userLogin: (formData: iLoginFormValues) => Promise<void>;
  userLogout: () => void;
}

export interface iUser {
  id: string;
  name: string;
  email: string;
}

export interface iRegisterFormValues {
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
}

export interface iLoginFormValues {
  email: string;
  password: string;
}
