import type { IPokemonList } from "interface/IPokemonList";
import styled from "styled-components";

type VSProps = {
  poke: IPokemonList;
  resetPoke: () => void;
  getSearch: (poke: IPokemonList) => void;
};

export default function VsModalCheckComponent({
  poke,
  getSearch,
  resetPoke,
}: VSProps) {
  return (
    <>
      <TitleStyled>
        검색된 <strong>{poke.name}</strong>과 비교하시겠습니까?
      </TitleStyled>
      <ButtonWrapper>
        <button onClick={() => getSearch(poke)}>예</button>
        <button onClick={resetPoke}>아니오</button>
      </ButtonWrapper>
    </>
  );
}

const TitleStyled = styled.div`
  font-weight: bold;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;

  button {
    width: 70px;
    height: 25px;
    border: 1px solid black;
    background-color: white;
    cursor: pointer;

    &:hover {
      border: none;
      background-color: gray;
      color: white;
      font-weight: bold;
    }
  }
`;
