import React, { useContext } from 'react'
import { iProducts, UserContext } from '../../../../contexts/UserContext'
import PropertyCard from './propertyCard'
import { StyledPropertyList } from './style'


function PropertyList() {
  const {filteredList} = useContext(UserContext)
  return (
    <StyledPropertyList>
      {filteredList?.map ((property, index)=> {
          return  <PropertyCard key={index} property={property}/>
        })}
        {/* <PropertyCard /> */}
    </StyledPropertyList>
  )
}

export default PropertyList