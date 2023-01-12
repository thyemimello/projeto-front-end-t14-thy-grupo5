import React from 'react'
import { StyledEmptyList } from './style'

function EmptyList() {
  return (
    <StyledEmptyList>
        <h3 className='title3'>Sua lista está vazia</h3>
        <p className='title4'>Adicione imóveis</p>
    </StyledEmptyList>
  )
}

export default EmptyList