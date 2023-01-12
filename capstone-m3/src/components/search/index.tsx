import { AiOutlineSearch } from "react-icons/ai";
import { useContext } from "react";

import {  Btn1, DivGeral } from "./style";

import { UserContext } from "../../contexts/UserContext";



function Search() {
    const {
        product,
        setProduct,
        setProductSearch,
        setValueInput
      } = useContext(UserContext);


      function handleInput (event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
      }

      function filtraProduto(valueInput: string) {
        // setProductSearch(event.target.value);
    
        const filter = product.filter((elem) =>
          elem.title.toLowerCase().includes(valueInput.toLowerCase())
        );
        setProduct(filter);
      }

      return (
      <DivGeral onSubmit={(event) => handleInput(event)}>
        <div className="divInput">
          <input
            onChange={(event) => setValueInput(event.target.value)}
            placeholder="Digitar Pesquisa"
            className="searchBar"
          ></input>
          {/* <Btn1 className="btnX ">
            <AiOutlineSearch className="iconSearch" />
          </Btn1> */}
        </div>
      </DivGeral>
        
      )
}

export default Search;