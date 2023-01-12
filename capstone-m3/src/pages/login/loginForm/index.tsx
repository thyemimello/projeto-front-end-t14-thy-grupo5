import { useContext } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { iFormLogin, UserContext } from "../../../contexts/UserContext";
import React from "react";
import { StyledDivLogo } from "./style";
import { Link } from "react-router-dom";
import { StyledForm } from "../../../components/form/style";
import TextField from "@mui/material/TextField";

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
    <StyledForm noValidate onSubmit={handleSubmit(onSubmitFunction)}>
      <div className="formContainer">
        <h2 className="titleLogin">Login</h2>
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              className="input"
              color= {errors.email ? 'error' : 'success'}
              {...register("email")}
            />
            <p className="error">{errors.email?.message}</p>
            <TextField
              label="Senha"
              variant="outlined"
              type="password"
              className="input"
              color= {errors.password? 'error' : 'success'}
              {...register("password")}
            />
            <p className="error title7">{errors.password?.message}</p>
            <button className="goRegister" type="submit">
              Logar
            </button>
            <p className="goLogin">
              Crie sua conta para saber mais detalhes do seu novo imóvel!
            </p>
            <Link className="goRegister" to={'/register'}>Cadastrar</Link>
      </div>
    </StyledForm>
    // <StyledDivLogo>
    //   <div className="divForm">
      
    //     <form onSubmit={handleSubmit(onSubmitFunction)}>
    //       <h2 className="titleLogin">Login</h2>
    //       <p className="textLogin">Nome</p>
    //       <TextField
    //         label="Email"
    //         variant="outlined"
    //         type="email"
    //         className="input"
    //         {...register("email")}
    //       />
    //       <p className="error title7">{errors.email?.message}</p>
    //       <TextField
    //         label="Senha"
    //         variant="outlined"
    //         type="password"
    //         className="input"
    //         {...register("password")}
    //       />
    //       <p className="error title7">{errors.password?.message}</p>
    //       <button className="btnOpenLogin" type="submit">
    //         Logar
    //       </button>
    //       <p className="textRegisterLogin">
    //         Crie sua conta para saber mais detalhes do seu novo imóvel!
    //       </p>

    //       <Link className="btnRegisterLogin" to={'/register'}>Cadastrar</Link>
    //     </form>
    //   </div>
    // </StyledDivLogo>
  );
};
