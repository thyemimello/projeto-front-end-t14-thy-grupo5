import React, { useContext } from 'react'
import { UserContext } from '../../../../../../contexts/UserContext'
import FavoriteList from './favoriteList'
import { StyledFullList } from './style'

function FullList() {
    const {favoriteList} = useContext(UserContext)
  return (
    <StyledFullList>
        <FavoriteList favoriteList={favoriteList}/>
    </StyledFullList>
  )
}

export default FullList