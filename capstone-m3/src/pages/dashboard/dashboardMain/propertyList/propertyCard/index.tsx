import React from 'react'
import { StyledPropertyCard } from './style'
import ImgImovel from './imgImovel.jpg'
import LogoHeader from '../../../../../components/logo/LogoHeader.jpg'
import { FiStar } from "react-icons/fi"
import { BtnAdd } from './btnAdd/style'
function PropertyCard() {
  return (
    <StyledPropertyCard>
       <div>
            <FiStar className="aiOutlineHeart cursor" />
            <img src={LogoHeader} alt="Logo"></img>
          </div>
          <p className="name">Apartamento</p>
          <p className="category">Aluguel</p>
          <p className="localization">Rio de Janeiro</p>
          <p className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <p className="price">R$ 10.00</p>
          <span>
            <BtnAdd>Adicionar</BtnAdd>
          </span>
    </StyledPropertyCard>
  )
}

export default PropertyCard