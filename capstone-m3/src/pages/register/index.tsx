import { StyledRegister } from "./style"
import Logo from '../../components/logo/LogoCapstone.png'
import { StyledForm } from "../../components/form/style"
import TextField from "@mui/material/TextField"
import { Link } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import { SubmitHandler, useForm } from "react-hook-form"
import { useContext, useState } from "react"
import * as yup from "yup";
import { iRegisterFormValues, UserContext } from "../../contexts/UserContext"

function Register() {
  const registerSchema = yup.object().shape({
    name: yup.string().required("O nome é obrigatório"),
    email: yup
      .string()
      .required("O email é obrigatório!")
      .email("é necessário fornecer um e-mail válido"),
    password: yup
      .string()
      .required("A senha é obrigatória")
      .min(6, "É necessário pelo ter menos 6 caracteres"),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password")], "As senhas precisam ser iguais"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iRegisterFormValues>({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });
  const [loading, setLoading] = useState(false);
  const { userRegister } = useContext(UserContext);

  const submit: SubmitHandler<iRegisterFormValues> = (formData: any) => {
    // console.log(formData);
    const newData = {...formData, userType: 'user'}
    userRegister(newData, setLoading);
  };
  return (
    <StyledRegister >
        <img className="logo" src={Logo} alt="" />
        <StyledForm noValidate onSubmit={handleSubmit(submit)}>
        <div className="formContainer">
          <div className="innerDiv">
            <h2 className="title1">Cadastro</h2>
            <Link to={'/'} className="goLogin title5">
              Retornar para o login
            </Link>
          </div>

        
          <TextField
            label="Nome"
            variant="outlined"
            type="text"
            className="input"
            color= {errors.name ? 'error' : 'success'}
            {...register("name")}
          />
           {errors.name?.message && (
            <p className="error title7">{errors.name.message}</p>
          )}
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            className="input"
            color= {errors.email ? 'error' : 'success'}
            {...register("email")}
          />
          {errors.email?.message && (
            <p className="error title7">{errors.email.message}</p>
          )}
          <TextField
            label="Senha"
            variant="outlined"
            type="password"
            className="input"
            color= {errors.password? 'error' : 'success'}
            {...register("password")}
          />
          {errors.password?.message && (
            <p className="error title7">{errors.password.message}</p>
          )}
          <TextField
            label="Confirmar Senha"
            variant="outlined"
            type="password"
            className="input"
            color= {errors.confirmPassword? 'error' : 'success'}
            {...register("confirmPassword")}
          />
          {errors.confirmPassword?.message && (
            <p className="error title7 ">{errors.confirmPassword.message}</p>
          )}
          {/* <TextField
            label="CPF"
            variant="outlined"
            type="text"
            className="input"
          /> */}
          <button
            type="submit"
            className="goRegister title6"
          >
            Cadastrar
          </button>
        </div>
        </StyledForm>
    </StyledRegister>
  )
}

export default Register