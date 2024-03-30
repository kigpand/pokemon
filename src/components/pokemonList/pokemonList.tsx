import { useNavigate } from "react-router-dom";
import { IPokemonList } from "../../interface/IPokemonList";
import { MouseEvent } from "react";
import { media } from "styles/MediaStyled";
import styled from "styled-components";

interface IPokeMonList {
  pokemon: IPokemonList;
}

const PokemonList = ({ pokemon }: IPokeMonList) => {
  const nav = useNavigate();

  function onNav(e: MouseEvent<HTMLDivElement>) {
    sessionStorage.setItem("currentPoke", JSON.stringify(pokemon));
    nav("/detail");
  }

  return (
    <PokemonListWrapper onClick={onNav}>
      <NumberStyled>No.{pokemon.id}</NumberStyled>
      <ImgWrapper src={pokemon.imageUrl} alt={pokemon.name}></ImgWrapper>
      <NameStyled>{pokemon.name}</NameStyled>
    </PokemonListWrapper>
  );
};

export default PokemonList;

const PokemonListWrapper = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  min-width: 100px;

  &:hover {
    cursor: pointer;
    background-color: lightgray;
  }

  ${media.phone`
    width: 90%;
    height: 150px;
  `}
`;

const NumberStyled = styled.div`
  font-size: 20px;
  color: gray;

  ${media.phone`
    font-size: 16px;
  `}
`;

const ImgWrapper = styled.img`
  height: 140px;
  object-fit: contain;

  ${media.phone`
    height: 100px;
  `}
`;

const NameStyled = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`;
