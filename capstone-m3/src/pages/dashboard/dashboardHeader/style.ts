import styled from "styled-components";

export const StyledDashboardHeader = styled.header`
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1c1c29;

  .headerContainer {
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      height: 80px;
    }
    .logout {
        color: #44b7e6;
        border: 2px solid #44b7e6;
        padding: 5px;
        border-radius: 5px;
    }
  }
`;
