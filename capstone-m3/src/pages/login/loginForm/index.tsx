import { useContext } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { iFormLogin, UserContext } from "../../../contexts/UserContext";
import React from "react";
import { StyledDivLogo } from "./style";
import { Link } from "react-router-dom";

export const LogoForm = () => {
  const { loginRequest } = useContext(UserContext)

  const loginSchema = yup.object().shape({
    email: yup.string().required("Campo Obrigatório").email("Email invalido"),
    password: yup
      .string()
      .required("Campo obrigatorio")
      ,
  });

  const { register, 
    handleSubmit,
    formState: { errors } 
  } = useForm<iFormLogin>({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  const onSubmitFunction: SubmitHandler<iFormLogin> = (data) => {
    console.log(data)
    loginRequest(data);
  };

  return (
    <StyledDivLogo>
      <div className="divForm">
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <h2 className="titleLogin">Login</h2>
          <p className="textLogin">Nome</p>
          <input
            className="inputLogin"
            type="email"
            placeholder="Digite seu nome"
            {...register("email")}
          />
          <p className="error title7">{errors.email?.message}</p>
          <p className="textLogin">Senha</p>
          <input
            className="inputLogin"
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          <p className="error title7">{errors.password?.message}</p>
          <button className="btnOpenLogin" type="submit">
            Logar
          </button>
          <p className="textRegisterLogin">
            Crie sua conta para saber mais detalhes do seu novo imóvel!
          </p>

          <Link className="btnRegisterLogin" to={'/register'}>Cadastrar</Link>
        </form>
      </div>
    </StyledDivLogo>
  );
};
