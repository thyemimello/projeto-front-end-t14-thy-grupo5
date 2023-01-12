import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CheckerContext } from "../../../../contexts/checkerContext";
import { UserContext } from "../../../../contexts/UserContext";
import { StyledModalFavorites } from "../../dashboardHeader/modalFavorites/style";
import { StyledModalRegisterProperty } from "../../dashboardHeader/modalRegisterProperty/style";

function ModalChecker() {
    const {setFavoriteModal, favoriteList} = useContext(UserContext)
    return (
        <StyledModalFavorites>
            <form onSubmit={() => console.log()}>
<div className='cartTitle'>
            <h2 className="title3">Lista de favoritos</h2>
            <AiOutlineClose className='closeIcon' onClick={() => {
                setFavoriteModal(false)
            }}/>
        </div>
          <div className="divInput">
            <input type="checkbox" name="check" />
            <label htmlFor="check">Imóvel Verificado</label>
            <label>
              {" Adicionar Observações "}
              <textarea placeholder="Adicione Observações" />
            </label>
            <button type="submit">Enviar</button>
          </div>
            </form>
            
        </StyledModalFavorites>
      );
    };

export default ModalChecker