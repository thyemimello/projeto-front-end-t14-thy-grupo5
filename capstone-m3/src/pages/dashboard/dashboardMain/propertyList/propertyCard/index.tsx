import React from 'react'
import { StyledPropertyCard } from './style'
import ImgImovel from './imgImovel.jpg'

function PropertyCard() {
  return (
    <StyledPropertyCard>
        
        <img src={ImgImovel} alt="" />
        <h3>Apartamento</h3>
        <p>Rua XXXX</p>
        <p>X m²/ x quartos/ x vagas</p>
        <p>valor</p>
    </StyledPropertyCard>
  )
}

export default PropertyCard