import styled from "styled-components";

export const StyledDivLogin = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #1c1c29;
  img {
    max-width: 100%;
  }
  .divContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 90%;
    margin: 0 auto;
  }

  .divFooter {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 15%;
    gap: 8px;
    color: var(--color-font);
  }
  @media (min-width: 768px) {
    .divContainer {
       flex-direction: row;
    }
   
    align-items: center;
    justify-content: center;
    gap: 60px;
  }
`;
