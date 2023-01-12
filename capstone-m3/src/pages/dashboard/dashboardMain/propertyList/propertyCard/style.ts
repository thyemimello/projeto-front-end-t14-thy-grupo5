import styled from "styled-components";

export const  StyledPropertyCard = styled.li`
  margin-top: 1.875rem;
  display: flex;
  /* overflow-x: scroll; */
  width: 30%;
  flex-direction: column;
  flex-wrap: wrap;
  border: 2px solid #1965848c;
  border-radius: 5px;
  ul {
    list-style: none;
    display: flex;
    gap: 1.25rem;
    padding:1.25rem;
    width: 100%;
    flex-wrap:wrap;
    
  }
  li {
    max-width: 20%;
    border-bottom: solid 5px #1c1c29;
    display: flex;
    flex-direction: column;
    /* position: relative; */
    border: 2px solid #1965848c;
    border-radius: 5px;

  }
  div {
    background-color: var( --color-Grey-0);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    
  }
  img {
    max-width: 100%;
   object-fit: cover;
  }
  
  p {
    padding-left: .625rem;
    margin-bottom: 2px;
    margin: 5px 0 5px 0;
  }
  .name {
    font-style: normal;
    font-weight: 700;
    font-size: var(--heading-3);
    line-height: 1.5rem;
    color: var(--color-Grey-200);
    padding: 10px 10px;
    
  }
  .category {
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1rem;
    color: var(--color-Grey-100);
    
  }

  .localization{
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1rem;
    color: var(--color-Grey-100);
  }

  .description {
  max-width: 25ch;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 5px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical; 
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1rem;
  color: var(--color-Grey-50);
  }
  
  .price {
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #1c1c29;
    margin: 10px 0 10px 0;
  }

  Button {
    width: 6.625rem;
    margin-left: .625rem;
    margin-bottom: 1.5625rem;
  }
  
  @media (min-width: 43.75rem) {
    overflow-y: hidden;
    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 1.25rem;
      width: 62.5rem;
      height: 100%;
      
        margin-left:20%;
    
    }
  }

  .FiStar{
    /* position: absolute; */
    top: 10px;
    left: 10px;
    font-size: 1.8rem;
    color: #44b7e6;
  }
`;

