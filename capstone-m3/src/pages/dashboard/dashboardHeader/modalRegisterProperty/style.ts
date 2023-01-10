import styled from "styled-components";

export const StyledModalRegisterProperty = styled.div`
position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(51, 51, 51, 0.5);
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .divMain {
    /* position: absolute; */
    width:100%;
    max-width: 340px;
    background-color:#F5F5F5;
    margin-left: 2.5rem;
    padding-bottom: 1.25rem;
    height: max-content;
    max-height: 28.125rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;
    border-radius: 0.4375rem;
    animation: modalAnimation 2s;
    overflow: auto;
  }
  @keyframes modalAnimation {
    0% {
      opacity: 0;
      transform: translateY(-50%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .divtitle {
    background:  #1c1c29;
    border: 1px solid #44b7e6;
    width: 100%;
    height: 100%;
    border-radius: 0.3125rem 0.3125rem 0rem 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title {
    color: #ffffff;
    font-weight: 700;
    font-size: 1.125rem;
    padding: 1.25rem;
  }
  .btnCloseModal {
    padding: 0.625rem;
    color: #ffffff;
    cursor: pointer;
  }

  @media (min-width: 43.75rem) {
    padding-right: 0.625rem;
    margin-right: 6.25rem;
    margin-top: 2.5rem;
  }

  form {
    border-radius: 0.3125rem;
    padding: 1.25rem;
    border: 0.0625rem solid #E0E0E0;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    label {
      display: flex;
      flex-direction: column;
      font-size: 0.75rem;
      color: #828282;
      span {
        /* position: relative; */
        background-color: #ffffff;
        width: max-content;
        padding: 0rem 0.3125rem;
        top: 0.5rem;
        left: 0.3125rem;
      }
    }
    input {
      background: #ffffff;
      border: 0.125rem solid #333333;
      border-radius: 0.3125rem;
      width: 100%;
      padding: 0.9375rem;
      margin: 0 auto;
    }
    textarea{
      background: #ffffff;
      border: 0.125rem solid #333333;
      border-radius: 0.3125rem;
      width: 100%;
      padding: 0.9375rem;
      margin: 0 auto;
    }
    .divInput {
      display: flex;
      flex-direction: column;
      gap: 0.3125rem;
    }
  }
`