import styled from "styled-components";
import LogoCapstone from '../../components/logo/LogoCapstone.png'
export const StyledHome = styled.main`
width: 100vw;
height: 100vh;
background-color: #1c1c29;
background-image: url(${LogoCapstone});
background-repeat: no-repeat;
background-position: center;
display: flex;
justify-content: center;
align-items: center;

.homeContainer {
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    .upperDiv {
       width: 100%;
       height: 50%;
       display: flex;
       justify-content: space-between;
       align-items:flex-end
    }
    .lowerDiv {
        width: 100%;
       height: 50%;
       display: flex;
       align-items:flex-end;
       justify-content: center;
    }
}
.homeRedirect {
    background-color: #44b7e6;
    padding: 15px;
    border-radius: 5px;
    color: #1c1c29;
}

`