import React, { useContext } from "react";
import LogoHeader from "../../../components/logo/LogoHeader.jpg";
import { Link } from "react-router-dom";
import { StyledDashboardHeader } from "./style";
import { UserContext } from "../../../contexts/UserContext";
import ModalRegisterProperty from "./modalRegisterProperty";
import { FaAddressCard } from "react-icons/fa"
import { BtnSigningUp } from "./btnSigningUp/style";

function DashboardHeader() {
  const { registerModal, setRegisterModal } = useContext(UserContext);
  const token = localStorage.getItem("@projetofront:Token");
  return (
    <StyledDashboardHeader>
      <div className="headerContainer">
        <img src={LogoHeader} alt="" />
        <div onClick={() => setRegisterModal(true)} className="signingUp">
          {token && <BtnSigningUp>
            <FaAddressCard className="iconStyleCart cursor" />
            <p>CADASTRE SEU IMÓVEL</p>
          </BtnSigningUp>}
          
        </div>
        {token ? <Link className="logout" to={"/"} onClick={() => {
          localStorage.removeItem('@projetofront:Token')
        }}>
          Sair
        </Link> : <Link className="logout" to={"/login"} >Entrar</Link>}
        
        {registerModal && <ModalRegisterProperty />}
      </div>
    </StyledDashboardHeader>
  );
}

export default DashboardHeader;
