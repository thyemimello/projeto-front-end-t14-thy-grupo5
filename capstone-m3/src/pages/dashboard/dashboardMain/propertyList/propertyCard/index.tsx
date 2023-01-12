import React, { useContext, useEffect } from "react";

import { FiStar } from "react-icons/fi";
import { BtnAdd } from "./btnAdd/style";
import { iProducts, UserContext } from "../../../../../contexts/UserContext";
import { StyledPropertyCard } from "./style";

export interface iProductProps {
  property: iProducts;
}
function PropertyCard({ property }: iProductProps) {
  const { addFavorite} =
    useContext(UserContext);

  return (
    <StyledPropertyCard>
      <div>
        <FiStar className="aiOutlineHeart cursor" />
        <img src={property.img} alt="Foto do produto"></img>
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
      <BtnAdd onClick={() => {
        addFavorite(property)
      }}>Adicionar</BtnAdd>
      {/* <ul>
        {productFilter.length === 0 && productSearch.length !== 0 ?(
          <div className="divGeralResultado">
            <p className="resultadoP">Resultado da pesquisa: {productSearch}</p>
            <p>Não há produtos com este nome</p>
          </div>
        ) : productFilter.map(
          ({ id, title, description, value, img, adress }, index) => (
            <li key={id}>
              <div>
                <FiStar className="aiOutlineHeart cursor" />
                <img src={img} alt="Foto do produto"></img>
              </div>
              <p className="name">{title}</p>
              <p className="description">{description}</p>
              <p className="localization">{adress.city}</p>
              <p className="localization">{adress.street}</p>
              <p className="localization">{adress.number}</p>
              <p className="valorP">
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(value)}
              </p>
              <BtnAdd>Adicionar</BtnAdd>
            </li>
          )
        )}
        {productFilter.length === 0 && productSearch.length !== 0 ? (
          <div className="divGeralResultado">
            <p className="resultadoP">Resultado da pesquisa: {productSearch}</p>
            <p>Não há produtos com este nome</p>
          </div>
        ) : productFilter.length > 0 ? (
          productFilter.map(
            ({ id, title, description, value, img, adress }, index) => (
              <li key={id}>
                <div>
                  <FiStar className="aiOutlineHeart cursor" />
                  <img src={img} alt="Foto do produto"></img>
                </div>
                <p className="name">{title}</p>
                <p className="description">{description}</p>
                <p className="localization">{adress.city}</p>
                <p className="localization">{adress.street}</p>
                <p className="localization">{adress.number}</p>
                <p className="valorP">
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(value)}
                </p>
                <BtnAdd>Adicionar</BtnAdd>
              </li>
            )
          )
        ) : (
          product.map(
            ({ id, title, description, value, img, adress }, index, item) => (
              <li key={id}>
                <div>
                  <FiStar className="aiOutlineHeart cursor" />
                  <img src={img} alt="Foto do produto"></img>
                </div>
                <p className="name">{title}</p>
                <p className="description">{description}</p>
                <p className="localization">{adress.city}</p>
                <p className="localization">{adress.street}</p>
                <p className="localization">{adress.number}</p>
                <p className="valorP">
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(value)}
                </p>
                <span>
                  <BtnAdd onClick={() => {
                    
                  }}>Adicionar</BtnAdd>
                </span>
              </li>
            )
          )
        )}
      </ul> */}
    </StyledPropertyCard>
  );
}

export default PropertyCard;
