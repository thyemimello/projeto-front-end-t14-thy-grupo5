import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createContext } from "react";
import { api } from "../../service/api";
import { iDefaultProviderProps } from "./types";

export interface iFormLogin {
  email: string;
  password: string;
}

interface iUser {
  email: string;
  password: string;
  name: string;
  cpf: number;
  type: string;
}

interface iUserContext {
  user: iUser | null;
  loginRequest: (data: iFormLogin) => void;
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iDefaultProviderProps) => {
  const [user, setUser] = useState<iUser | null>(null);

  const navigate = useNavigate();

  const loginRequest = async (data: iFormLogin) => {
    try {
      const response = await api.post("/login", data);
      toast.success("Login Realizado");
      localStorage.setItem("@projetofront:Token", response.data.accessToken);
      setUser(response.data.user);

      setTimeout(() => {
        navigate("/dashboard");
      }, 5000);
    } catch (error) {
      toast.error("Senha ou Email Invalidos");
      console.log(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("@projetofront:Token");

    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, loginRequest }}>
      {children}
    </UserContext.Provider>
  );
};
