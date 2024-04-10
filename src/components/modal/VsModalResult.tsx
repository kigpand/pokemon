import VsModalResultPokeList from "components/modal/VsModalResultPokeList";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { mobileWidth } from "styles/globalstyles";
import { IPokemonList } from "interface/IPokemonList";
import { RootState } from "store/store";

type Props = {
  currentPoke: IPokemonList;
  searchPoke: IPokemonList;
};

export default function VsModalResult({ currentPoke, searchPoke }: Props) {
  const theme = useSelector((state: RootState) => state.datas.theme);

  return (
    <ResultWrapper $backgroundColor={theme === "dark" ? "black" : "white"}>
      <TitleStyled>
        {currentPoke.name} vs {searchPoke.name}
      </TitleStyled>
      <Container>
        <VsModalResultPokeList poke={currentPoke} vsPoke={searchPoke} />
        <VsModalResultPokeList poke={searchPoke} vsPoke={currentPoke} />
      </Container>
    </ResultWrapper>
  );
}

const ResultWrapper = styled.section<{ $backgroundColor: string }>`
  background-color: ${(props) => props.$backgroundColor};
  width: 500px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  border: 1px solid lightgray;

  @media only screen and (max-width: ${mobileWidth}) {
    width: 100%;
  }
`;

const TitleStyled = styled.div`
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  padding: 20px 0;
  text-align: center;
  border-bottom: 1px solid lightgray;

  @media only screen and (max-width: ${mobileWidth}) {
    font-size: 16px;
    padding: 15px 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-grow: 1;

  article {
    &:first-child {
      border-right: 1px solid lightgray;
    }
  }
`;
