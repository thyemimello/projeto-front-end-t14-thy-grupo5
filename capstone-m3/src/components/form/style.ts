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
  background-color: #44b7e6;
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
      color: #1c1c29
    }
    button {
      background: #93d7af;
      border-radius: 8px;
      width: 100%;
      height: 60px;
      color: white;
    }
    /* button:hover {
      background: var(--color-primary);
    } */
    .p {
      color: #44b7e6;
    }
    .goRegister {
      background: #1c1c29;
      border: 1px solid #44b7e6;
      border-radius: 8px;
      width: 100%;
      height: 60px;
      color: #44b7e6;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    /* .goRegister:hover {
      background: var(--grey-300);
      color: var(--grey-100);
    } */
    .goLogin {
      color: #1c1c29;
      text-decoration: underline;
    }
  }
  .error {
    color: var(--color-secondary)
  }
.input, select {
  background-color: #e8f0fe;
  border: 1px solid #44b7e6;
  border-radius: 5px;
}
`;