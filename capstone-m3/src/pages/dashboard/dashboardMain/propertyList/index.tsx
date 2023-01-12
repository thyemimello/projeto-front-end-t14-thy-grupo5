import React from 'react'
import { iProducts } from '../../../../contexts/UserContext'
import PropertyCard from './propertyCard'
import { StyledPropertyList } from './style'

export interface iProductProps {
  item: iProducts
}
function PropertyList() {
  return (
    <StyledPropertyList>
        <PropertyCard />
    </StyledPropertyList>
  )
}

export default PropertyList