import React from 'react'

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