import styled from "styled-components";

export const StyledForm = styled.form`
  height: 500px;
  width: 90%;
  max-width: 460px;
  border: 2px solid var(--grey-0);
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 26px;
  background-color: #f1c400;
  .formContainer {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .innerDiv {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    h2 {
      color: var(--gray-600);
    }
    button {
      background: #93d7af;
      border-radius: 8px;
      width: 100%;
      height: 60px;
      color: white;
    }
    button:hover {
      background: var(--color-primary);
    }
    .p {
      color: #999999;
    }
    .goRegister {
      background: var(--grey-0);
      border-radius: 8px;
      width: 100%;
      height: 60px;
      color: #999999;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .goRegister:hover {
      background: var(--grey-300);
      color: var(--grey-100);
    }
    .goLogin {
      color: var(--grey-300);
      text-decoration: underline;
    }
  }
  .error {
    color: var(--color-secondary)
  }

`;