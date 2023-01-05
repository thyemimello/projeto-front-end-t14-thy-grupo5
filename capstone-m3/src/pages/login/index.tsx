import React from 'react'
import { StyledForm } from '../../components/form/style'
import { StyledLogin } from './style'
import TextField from "@mui/material/TextField";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <StyledLogin>
      {/* <img src="" alt="" />
      <StyledForm>
        <div className="formContainer">
          <h2 className="title3">Login</h2>
          <TextField
            label="Email"
            variant="outlined"
            type="text"
          />
          
          <TextField
            label="Senha"
            variant="outlined"
            type="password"
          />
          <button type="submit" className="title6">
          Logar
          </button>
          <p className="title5 p">
            Crie sua conta para saborear muitas delícias e matar sua fome!
          </p>
          <Link to={"/register"} className={"goRegister title6"}>
            Cadastrar
          </Link>
        </div>
      </StyledForm> */}
    </StyledLogin>
  )
}

export default Login