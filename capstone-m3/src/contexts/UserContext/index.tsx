import React, { createContext, useState } from "react";
import { Api } from "../../services/api";
import { iDefaultProviderProps } from "./@types";
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";

interface iUser {
  email: string;
  name: string;
  userType: string;
  id: string;
}
export interface iRegisterFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  userType: string;
}
interface iUserApi{
  accessToken: string;
    user: iUser;  
}
interface iUserContext {
  registerModal: boolean;
  setRegisterModal: React.Dispatch<React.SetStateAction<boolean>>;
  userRegister: (
    formData: iRegisterFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
}

export const UserContext = createContext({} as iUserContext);
function UserProvider({ children }: iDefaultProviderProps) {
  const [registerModal, setRegisterModal] = useState(false);
  const [user, setUser] = useState<iUser | null>(null);
  const navigate = useNavigate()
  async function userRegister(
    formData: iRegisterFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    try {
      const response = await Api.post<iUserApi>("/register", formData);
      setLoading(true);
      console.log(response);
      console.log(response.data.user)
      setUser(response.data.user);
      console.log(user);
      toast.success("Cadastro completo!");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Algo está errado");
    } finally {
      setLoading(false);
    }
  }
  return (
    <UserContext.Provider
      value={{
        registerModal,
        setRegisterModal,
        userRegister
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
