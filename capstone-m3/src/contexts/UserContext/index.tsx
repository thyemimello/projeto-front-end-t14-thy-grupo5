import React, { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";
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
export interface iFormLogin {
  email: string;
  password: string;
}

interface iUserContext {
  registerModal: boolean;
  setRegisterModal: React.Dispatch<React.SetStateAction<boolean>>;
  userRegister: (
    formData: iRegisterFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  user: iUser | null;
  loginRequest: (data: iFormLogin) => void;
  product: iProducts[];
  setProduct: Dispatch<SetStateAction<iProducts[]>>;
  productFilter: iProducts[];
  setProductFilter:Dispatch<SetStateAction<iProducts[]>>;
  productSearch: string;
  setProductSearch:Dispatch<SetStateAction<string>>;
  addFavorite: (item: iProducts) => void;
  valueInput: string;
  setValueInput: React.Dispatch<React.SetStateAction<string>>;
  filteredList: iProducts[] | [];
}
export interface iProducts {
  id: number;
  title: string;
  description: string;
  value: number;
  img: string;
  adress: {
    city: string;
    street: string;
    number: string;
  };

}

export const UserContext = createContext({} as iUserContext);
function UserProvider({ children }: iDefaultProviderProps) {
  const [registerModal, setRegisterModal] = useState(false);
  const [product, setProduct] = useState<iProducts[]>([]);
  const [productFilter, setProductFilter] = useState<iProducts[]>([]);
  const [productSearch, setProductSearch] = useState<string>("");
  const [user, setUser] = useState<iUser | null>(null);
  const [favoriteList, setFavoriteList] = useState<iProducts[]>([])
  const [valueInput, setValueInput] = useState("");
  const filteredList = product.filter((item) => {
   return valueInput == '' ? true : item.title.toLowerCase().includes(valueInput.toLowerCase())
  })
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
  const loginRequest = async (data: iFormLogin) => {
    try {
      const response = await Api.post("/login", data);
      toast.success("Login Realizado");
      localStorage.setItem("@projetofront:Token", response.data.accessToken);
      setUser(response.data.user);

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
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
  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("@projetofront:Token");
      try {
        const { data } = await Api.get<iProducts[]>("/posts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setProduct(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [setProduct]);
  function addFavorite(property: iProducts) {
    if(!favoriteList.some(favItem => favItem.id == property.id)) {
      console.log('nao ta na lista')
    }
  }
  return (
    <UserContext.Provider
      value={{
        registerModal,
        setRegisterModal,
        userRegister,
        user,
        loginRequest,
        product,
        setProduct, 
        productFilter, 
        setProductFilter,
        productSearch,
        setProductSearch,
        addFavorite,
        valueInput,
        setValueInput,
        filteredList
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
