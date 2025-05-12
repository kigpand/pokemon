import { useState } from "react";
import type { IPokemonList } from "interface/IPokemonList";
import VsModalSearchComponent from "components/modal/VsModalSearchComponent";
import VsModalCheckComponent from "components/modal/VsModalCheckComponent";
import styled from "styled-components";

type Props = {
  getSearch: (poke: IPokemonList) => void;
};

export default function VsModalSearch({ getSearch }: Props) {
  const [searchPoke, setSearchPoke] = useState<IPokemonList | null>(null);

  function getSearchPoke(poke: IPokemonList) {
    setSearchPoke(poke);
  }
  return (
    <SearchWrapper>
      <TitleStyled>어떤 포켓몬과 비교하시겠습니까?</TitleStyled>
      <SearchMain>
        {searchPoke ? (
          <VsModalCheckComponent
            poke={searchPoke}
            getSearch={getSearch}
            resetPoke={() => setSearchPoke(null)}
          />
        ) : (
          <VsModalSearchComponent getSearchPoke={getSearchPoke} />
        )}
      </SearchMain>
    </SearchWrapper>
  );
}

const SearchWrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: 20px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  border: 1px solid lightgray;
`;

const TitleStyled = styled.header`
  border-bottom: 1px solid lightgray;
  padding: 15px 10px 10px 10px;
  font-weight: bold;
`;

const SearchMain = styled.div`
  flex-grow: 1;
  padding: 20px;
`;
