import React from 'react'
import { iProducts } from '../../../../../../../contexts/UserContext'
import FavoriteItens from './favoriteItens'
import { StyledFavoriteList } from './style'


interface iFavoriteListProps {
    favoriteList: iProducts[]
}
function FavoriteList({favoriteList}: iFavoriteListProps) {
  return (
    <StyledFavoriteList>
        {favoriteList?.map((item)=> {
          return <FavoriteItens key={item.id} item={item}/>
        })}
    </StyledFavoriteList>
  )
}

export default FavoriteList