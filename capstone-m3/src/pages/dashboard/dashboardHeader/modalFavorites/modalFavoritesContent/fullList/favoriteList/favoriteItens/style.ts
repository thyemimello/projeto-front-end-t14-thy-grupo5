import styled from "styled-components";

export const StyledFavoriteItens = styled.li`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  .cartDiv {
    display: flex;
    gap: 10px;
    width: 100%;
  }
  .itemImg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    background-color: #E0E0E0;
    border-radius: 5px;
    img {
      max-width: 100%;
    }
  }
  .itemNameAmount {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    
    div {
      width: 106px;
      height: 34px;
      border: 2px solid #F2F2F2;
      display: flex;
      margin-bottom: 5px;
      
    }
  }
  .trashIcon {
    cursor: pointer;
    color: #1c1c29;
  }
`;
