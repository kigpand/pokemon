import type { IPokemonList } from "interface/IPokemonList";
import { useRef } from "react";
import { onSearchItem } from "utils/makeData";
import styled from "styled-components";

export default function VsModalSearchComponent({
  getSearchPoke,
}: {
  getSearchPoke: (poke: IPokemonList) => void;
}) {
  const searchRef = useRef<HTMLInputElement>(null);

  function handleSubmitButton(e: React.MouseEvent<HTMLFormElement>) {
    e.preventDefault();
    onSearchItem(searchRef, getSearchPoke);
  }

  return (
    <SearchWrapper onSubmit={handleSubmitButton}>
      <LabelStyled>검색할 포켓몬명이나 도감번호를 입력해주세요</LabelStyled>
      <InputStyled type="text" ref={searchRef}></InputStyled>
      <ButtonStyled type="submit"></ButtonStyled>
    </SearchWrapper>
  );
}

const SearchWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const LabelStyled = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const InputStyled = styled.input`
  height: 25px;
  border-radius: 8px;
  border: 1px solid lightgray;
  padding: 4px 8px;
`;

const ButtonStyled = styled.input`
  margin-top: 20px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: skyblue;
  border: none;
  outline: none;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: rgb(78, 78, 255);
  }
`;
