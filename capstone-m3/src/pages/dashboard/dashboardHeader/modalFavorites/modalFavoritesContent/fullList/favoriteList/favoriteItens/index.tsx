import React, { useContext } from 'react'
import { iProducts, UserContext } from '../../../../../../../../contexts/UserContext'
import { StyledFavoriteItens } from './style'
import { BsTrash } from "react-icons/bs";


interface iFavoriteItemProps {
    item:iProducts
}
function FavoriteItens( { item }: iFavoriteItemProps) {
    const {removeFavorite} = useContext(UserContext)
  return (
    <StyledFavoriteItens>
         <div className="cartDiv">
        <div className="itemImg">
          <img src={item.img} alt="" />
        </div>
        <div className="itemNameAmount">
          <h3 className="title3">{item.title}</h3>
          <p className='title6'>{`R$ ${item.value.toFixed(2)}`}</p>
        </div>
      </div>
      <BsTrash className='trashIcon' onClick={() => {
        removeFavorite(item.id)
      }}/>
    </StyledFavoriteItens>
  )
}

export default FavoriteItens