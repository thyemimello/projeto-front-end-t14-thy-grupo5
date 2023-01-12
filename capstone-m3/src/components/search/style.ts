import styled from "styled-components";

export const DivGeral = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
 

  

.posicionamento1 {
    display: flex;
    align-items: center;
    position: relative;
   
  }

  .icone {
    font-size: 1.875rem;
    display: flex;
    gap: 1rem;
    color: var(--color-Grey-50);
 
  }

  input {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 0rem 0.625rem 0rem 0.9375rem;
    gap: 7.1875rem;
    width: 100%;
    min-width: 20rem;
    height: 3.75rem;
    border: 0.125rem solid var( --color-Grey-20);
    border-radius: 0.5rem;
    margin-left: 2.5rem;
    background-color:var(--color-white);
    margin-bottom: 1.25rem;
    margin-right: 0.625rem;
  }
  input::placeholder {
    color: var(--color-Grey-20);
    font-size: 0.9375rem;
  }
  .posicionamento1 {
    display: flex;
    align-items: center;
    position: relative;
  }
  .btnX {
    position: absolute;
    right: 6%;
    top: 13%;
  }
  .icone {
    font-size: 1.875rem;
    display: flex;
    gap: 1rem;
    color: var(--color-Grey-50);
 
  }
  .cursor {
    cursor: pointer;
  }
  .divInput {
    position: relative;
    display: flex;
  }
  .btnFechar {
    background-color: gray;
    width: 1.4375rem;
    border-radius: 50%;
    height: 1.4375rem;
    color: white;
    text-align: center;
    padding: 0.1875rem;
    cursor: pointer;
  }
  .divIcone {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }
  .divIconeCont {
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  @media (min-width: 43.75rem) {
    .divGeral {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
    .icone {
      padding: 0rem 2.5rem;
    }
    .divIcone {
      width: 100%;
      padding: 0rem 0rem;
    }
    .divLogo {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 5rem;
   

  }

  .divLogo > img{
    width: 50%;
    max-width: 500px;
    
  }
  }
`;

export const Btn1 = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0rem 1.25rem;
color: var(--color-Grey-0);
gap: .625rem;
height: 2.5rem;
background: #1c1c29;
border: .125rem solid #44b7e6;
border-radius: .5rem;
cursor:pointer;`


