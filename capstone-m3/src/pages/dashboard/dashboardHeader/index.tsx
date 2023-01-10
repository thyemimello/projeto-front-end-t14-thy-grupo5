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
  return (
    <StyledDashboardHeader>
      <div className="headerContainer">
        <img src={LogoHeader} alt="" />
        <div onClick={() => setRegisterModal(true)} className="signingUp">
          <BtnSigningUp>
            <FaAddressCard className="iconStyleCart cursor" />
            <p>CADASTRE SEU IMÓVEL</p>
          </BtnSigningUp>
        </div>
        <Link className="logout" to={"/"}>
          Sair
        </Link>
        {registerModal && <ModalRegisterProperty />}
      </div>
    </StyledDashboardHeader>
  );
}

export default DashboardHeader;
