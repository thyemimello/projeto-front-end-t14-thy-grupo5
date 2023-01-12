import React, { createContext, useState } from "react";
import { Api } from "../../services/api";
import { iProducts } from "../UserContext";
import { iDefaultProviderProps } from "../UserContext/@types";

export interface iCheckbox {
  checked: boolean;
  observation: string;
}

export interface iCheckerContext {
  formChecker: (formData: iProducts, id: number) => void;
}

export const CheckerContext = createContext({} as iCheckerContext);


function CheckerProvider({ children }: iDefaultProviderProps) {
    const [posts, setPosts] = useState([] as iProducts[]);
    const [formCheck, setFormCheck] = useState({} as iCheckbox);
  
    async function formChecker(formData: iProducts, id: number) {
      const token = localStorage.getItem("@projetofront:Token");
      try {
        const response = await Api.put<iProducts[]>("/posts/" + { id }, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
        console.log(response)
      } catch (error) {
        console.log(error);
      }
    }
  
    return (
      <CheckerContext.Provider value={{ formChecker }}>
        {children}
      </CheckerContext.Provider>
    );
  }
  
  export default CheckerProvider;
  