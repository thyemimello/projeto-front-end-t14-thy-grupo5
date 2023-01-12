import React from 'react'
import { LogoForm } from './loginForm';
import { LogoLogin } from './loginLogo';

import { StyledDivLogin } from "./style";

export const Login = () => {
  return (
    <StyledDivLogin>
    <div className="divContainer">
      <LogoLogin />
      <LogoForm />
    </div>
    
  </StyledDivLogin>
  )
}

export default Login