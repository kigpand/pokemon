import { media } from "styles/MediaStyled";
import styled from "styled-components";
import { useStorage } from "hooks/useStorage";
import type { IPokemonList } from "interface/IPokemonList";
import { useBookList } from "hooks/useBookList";
import { getColor } from "utils/convert";

type Props = {
  pokemon: IPokemonList;
};

const PokemonList = ({ pokemon }: Props) => {
  const { setCurrentPokeStorage } = useStorage();
  const { findBookPoke } = useBookList();

  return (
    <PokemonListWrapper
      $pokeColor={getColor(pokemon.types![0])}
      $isBookPoke={findBookPoke(pokemon)}
      onClick={() => setCurrentPokeStorage(pokemon)}
    >
      <NumberStyled>No.{pokemon.id}</NumberStyled>
      <ImgWrapper src={pokemon.imageUrl} alt={pokemon.name}></ImgWrapper>
      <NameStyled
        $pokeColor={getColor(pokemon.types![0])}
        $isBookPoke={findBookPoke(pokemon)}
      >
        {pokemon.name}
      </NameStyled>
    </PokemonListWrapper>
  );
};

export default PokemonList;

type StyledProps = {
  $pokeColor: string;
  $isBookPoke: boolean;
};

const PokemonListWrapper = styled.div<StyledProps>`
  width: 100%;
  height: 200px;
  border: ${(props) =>
    props.$isBookPoke ? `2px solid ${props.$pokeColor}` : "1px solid #e8e8e8"};
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

const NameStyled = styled.div<StyledProps>`
  height: 60px;
  display: flex;
  color: ${(props) =>
    props.$isBookPoke ? props.$pokeColor : props.theme.textColor};
  align-items: center;
  justify-content: center;
  font-weight: 700;
`;
