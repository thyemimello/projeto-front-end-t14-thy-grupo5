import imgLogo from "../../../assest/Logoo.png";
import { StyledDivLogo } from "./style";

export const LogoLogin = () => {
  return (
    <StyledDivLogo>
      <img className="logoLogin" src={imgLogo} alt="" />
    </StyledDivLogo>
  );
};
