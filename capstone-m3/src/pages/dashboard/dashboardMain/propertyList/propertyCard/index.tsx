import React, { useContext, useEffect } from "react";

import { FiStar } from "react-icons/fi";
import { BtnAdd } from "./btnAdd/style";
import { iProducts, UserContext } from "../../../../../contexts/UserContext";
import { StyledPropertyCard } from "./style";
import { BsTrash } from "react-icons/bs";

export interface iProductProps {
  property: iProducts;
}
function PropertyCard({ property }: iProductProps) {
  const { addFavorite, openModal, removeState } = useContext(UserContext);
  
  function handleRemove() {
    if (window.confirm("Tem certeza que deseja excluir esse imóvel?")) {
      removeState(property.id);
    } else {
      console.log('ocorreu um erro')
    }
  }
  return (
    <StyledPropertyCard>
      <div>
        <FiStar className="aiOutlineHeart cursor" />
        <img src={property.img} alt="Foto do produto"></img>
      </div>
      <div className="divChecked">
        <button
          onClick={() => openModal(property, "Formulário de verificação")}
        >
          Verificado
        </button>
      </div>
      <p className="name">{property.title}</p>
      <p className="description">{property.description}</p>
      <p className="localization">{property.adress.city}</p>
      <p className="localization">{property.adress.street}</p>
      <p className="localization">{property.adress.number}</p>
      <p className="valorP">
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(property.value)}
      </p>
      <BtnAdd
        onClick={() => {
          addFavorite(property);
        }}
      >
        Adicionar
      </BtnAdd>
      <BsTrash
        onClick={() => {
          handleRemove()
        }}
      />
    </StyledPropertyCard>
  );
}

export default PropertyCard;
