import { AiOutlineSearch } from "react-icons/ai";
import { useContext } from "react";

import { Btn1, DivGeral } from "./style";

import { UserContext } from "../../contexts/UserContext";


function Search() {
    const {
        product,
        setProductFilter,
        setProductSearch,
      } = useContext(UserContext);

      function filtraProduto(event: React.ChangeEvent<HTMLInputElement>) {
        setProductSearch(event.target.value);
    
        const filter = product.filter((elem) =>
          elem.title.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setProductFilter(filter);
      }

      return (
      <DivGeral>
        <div className="divInput">
          <input
            onChange={(event) => filtraProduto(event)}
            placeholder="Digitar Pesquisa"
          ></input>
          <Btn1 className="btnX ">
            <AiOutlineSearch className="iconSearch" />
          </Btn1>
        </div>
      </DivGeral>
        
      )
}

export default Search;