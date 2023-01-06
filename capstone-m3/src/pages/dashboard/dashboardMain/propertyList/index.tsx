import React from 'react'
import PropertyCard from './propertyCard'
import { StyledPropertyList } from './style'

function PropertyList() {
  return (
    <StyledPropertyList>
        <PropertyCard/>
        <PropertyCard/>
        <PropertyCard/>
        <PropertyCard/>
        <PropertyCard/>
        <PropertyCard/>
    </StyledPropertyList>
  )
}

export default PropertyList