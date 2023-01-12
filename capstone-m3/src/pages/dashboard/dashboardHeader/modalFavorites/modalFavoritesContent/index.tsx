import React, { useContext } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { UserContext } from '../../../../../contexts/UserContext'
import EmptyList from './emptyList'
import FullList from './fullList'
import { StyledModalFavoritesContent } from './style'

function ModalFavoritesContent() {
    const {setFavoriteModal, favoriteList} = useContext(UserContext)
  return (
    <StyledModalFavoritesContent>
        <div className='cartTitle'>
            <h2 className="title3">Lista de favoritos</h2>
            <AiOutlineClose className='closeIcon' onClick={() => {
                setFavoriteModal(false)
            }}/>
        </div>
        {favoriteList.length == 0 ? <EmptyList/> : <FullList/>}
       
        
    </StyledModalFavoritesContent>
  )
}

export default ModalFavoritesContent