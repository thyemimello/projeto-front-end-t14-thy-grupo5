import styled from "styled-components";

export const StyledDivLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;

  .divForm {
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 100%;
    margin: 0 auto;
  }

  form {
    display: flex;
    flex-direction: column;
    background: var(--color-font);
    border: 2px solid var(--color-background);
    width: 70%;

    border-radius: 5px;

    box-sizing: border-box;
    padding: 1rem;
    height: 461px;
  }

  .titleLogin {
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: var(--color-background);
  }

  .textLogin {
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 15px;
    width: 34px;
    height: 15px;
    color: var(--color-background);
  }
  .inputLogin {
    width: 90%;
    height: 48px;
    background: #ffffff;
    border: 2px solid var(--color-btnregister);
    border-radius: 8px;
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13.0293px;
    line-height: 21px;
    color: var(--color-background);
    padding: 0 1rem;
  }

  .btnOpenLogin {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 60px;
    background: var(--color-background);
    border: 1.2182px solid var(--color-btnregister);
    border-radius: 8px;
    color: var(--color-font);

    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;

    margin-top: 20px;
  }

  .textRegisterLogin {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 18px;
    color: var(--color-background);
    margin-top: 15px;
  }

  .btnRegisterLogin {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;

    width: 100%;
    height: 60px;

    background: var(--color-background);
    border-radius: 8px;
    border: 1.2182px solid var(--color-btnregister);
    color: var(--color-font);

    margin-top: 8px;
  }
`;
