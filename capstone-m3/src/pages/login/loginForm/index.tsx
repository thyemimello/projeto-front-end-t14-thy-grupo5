import { useContext } from "react";
import {
  iFormLogin,
  UserContext,
} from "../../../contexts/usercontext/UserContext";
import { StyledDivLogo } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

export const LogoForm = () => {
  const { loginRequest } = useContext(UserContext);

  const loginSchema = yup.object().shape({
    email: yup.string().required("Campo Obrigatório").email("Email invalido"),
    password: yup
      .string()
      .required("Campo obrigatorio")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Mínimo de oito caracteres, pelo menos uma letra, um número e um símbolo"
      ),
  });

  const { register, handleSubmit } = useForm<iFormLogin>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmitFunction: SubmitHandler<iFormLogin> = (data) => {
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
          <p className="textLogin">Senha</p>
          <input
            className="inputLogin"
            type="password"
            placeholder="Senha"
            {...register("email")}
          />
          <button className="btnOpenLogin" type="submit">
            Logar
          </button>
          <p className="textRegisterLogin">
            Crie sua conta para saber mais detalhes do seu novo imóvel!
          </p>

          <button className="btnRegisterLogin" type="button">
            Cadastrar
          </button>
        </form>
      </div>
    </StyledDivLogo>
  );
};
