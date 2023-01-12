import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Api } from "../../services/api";
import { iDefaultProviderProps } from "./@types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { iProviderRegistration } from "../../pages/dashboard/dashboardHeader/modalRegisterProperty";
import { AxiosError } from "axios";

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
interface iUserApi {
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
  setProductFilter: Dispatch<SetStateAction<iProducts[]>>;
  productSearch: string;
  setProductSearch: Dispatch<SetStateAction<string>>;
  addFavorite: (item: iProducts) => void;
  valueInput: string;
  setValueInput: React.Dispatch<React.SetStateAction<string>>;
  filteredList: iProducts[] | [];
  favoriteList: iProducts[];
  favoriteModal: boolean;
  setFavoriteModal: React.Dispatch<React.SetStateAction<boolean>>;
  removeFavorite: (itemId: iProducts["id"]) => void;
  modalIsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalIsTitle: string;
  setIsTitle: React.Dispatch<React.SetStateAction<string>>;
  openModal: (data: iProducts, title: string) => void;
  createState: (formData: iProviderRegistration) => void;
  removeState: (id: number) => void;

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
  const [favoriteList, setFavoriteList] = useState<iProducts[]>([]);
  const [valueInput, setValueInput] = useState("");
  const [favoriteModal, setFavoriteModal] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsTitle, setIsTitle] = useState("");

  const openModal = (data: iProducts, title: string) => {
    console.log({ data, title });
    setIsOpen(true);
    setIsTitle(title);
    // setModalCart(data)
  };
  const filteredList = product.filter((item) => {
    return valueInput == ""
      ? true
      : item.title.toLowerCase().includes(valueInput.toLowerCase());
  });
  const navigate = useNavigate();

  async function createState(formData: iProviderRegistration) {
    try {
      const token = localStorage.getItem('@projetofront:Token')
      const newFormData = {
        userId: user?.id,
        title: formData.title,
        description: formData.description,
        img: formData.img,
        value: +formData.price,
        adress: {
          city: formData.city,
          street: formData.street,
          number: +formData.number
        },
        checker: {
          checked: false,
          observation: "",
        },
      };
      const response = await Api.post("/posts", newFormData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setProduct([...product, response.data])
      toast.success('Imóvel adicionado com sucesso')
      setRegisterModal(false)
    } catch (error) {
      toast.error('Ocorreu um erro')
      console.log(error)
    }
  }

  async function removeState (id: number) {
    try {
      const token = localStorage.getItem('@projetofront:Token')
      await Api.delete(`/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const newProduct = product.filter((item) => {
        return item.id !== id
      })
      setProduct(newProduct)
      toast.success('Imóvel excluído com sucesso')
    } catch (error) {
      toast.error('Ocorreu um erro')
      console.log(error)
    }
  }

  async function userRegister(
    formData: iRegisterFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    try {
      const response = await Api.post<iUserApi>("/register", formData);
      setLoading(true);
      console.log(response);
      console.log(response.data.user);
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
    if (!favoriteList.some((favItem) => favItem.id == property.id)) {
      setFavoriteList([...favoriteList, property]);
      toast.success("Imóvel favoritado!");
    } else {
      toast.error("Imóvel já foi favoritado");
    }
  }

  function removeFavorite(itemId: iProducts["id"]) {
    const newFavList = favoriteList.filter((item) => item.id !== itemId);
    setFavoriteList(newFavList);
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
        filteredList,
        favoriteList,
        favoriteModal,
        setFavoriteModal,
        removeFavorite,
        modalIsOpen,
        setIsOpen,
        modalIsTitle,
        setIsTitle,
        openModal,
        removeState,
        createState
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
