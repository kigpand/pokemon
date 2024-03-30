import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { KeyboardEvent } from "react";
import { useState } from "react";
import { BsFilterRight } from "react-icons/bs";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { mobileWidth } from "styles/globalstyles";
import { IPokemonList } from "interface/IPokemonList";
import { onSearchItem } from "utils/makeData";
import LOGO from "imgs/logo.png";
import styled from "styled-components";
import MainType from "./MainType";
import MainThemeToggle from "./MainThemeToggle";
import SortModal from "components/modal/SortModal";

const MainHeader = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const [onSortModal, setOnSortModal] = useState<Boolean>(false);
  const nav = useNavigate();

  function setPokeItem(poke: IPokemonList) {
    sessionStorage.setItem("currentPoke", JSON.stringify(poke));
    nav("/detail");
  }

  function onSearch(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      onSearchItem(searchRef, setPokeItem);
    }
  }

  function moveToBook() {
    nav("/books");
  }

  return (
    <HeaderStyled>
      <MainType />
      <LogoStyled src={LOGO} alt="logo"></LogoStyled>
      <SearchStyled
        type="text"
        ref={searchRef}
        placeholder="도감번호나 이름을 입력해주세요"
        onKeyDown={onSearch}
      ></SearchStyled>
      <MainThemeToggle />
      <SortStyled onClick={() => setOnSortModal(true)} />
      <BookStyled onClick={moveToBook} />
      {onSortModal && <SortModal closeSort={() => setOnSortModal(false)} />}
    </HeaderStyled>
  );
};

export default MainHeader;

const HeaderStyled = styled.header`
  width: 90%;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 10px;

  @media only screen and (max-width: ${mobileWidth}) {
    width: 100%;
  }
`;

const LogoStyled = styled.img`
  width: 150px;
  height: 50px;
  margin: 30px 0;
`;

const SearchStyled = styled.input`
  right: 0;
  border: none;
  outline: none;
  background-color: lightgray;
  width: 300px;
  height: 30px;
  border-radius: 20px;

  @media only screen and (max-width: ${mobileWidth}) {
    width: 90%;
  }
`;

const SortStyled = styled(BsFilterRight)`
  position: absolute;
  font-size: 30px;
  right: 1rem;
  height: 30px;
  object-fit: contain;
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 5px;
  top: 1rem;

  &:hover {
    background-color: lightgray;
    cursor: pointer;
  }

  @media only screen and (max-width: ${mobileWidth}) {
    width: 20px;
    height: 20px;
  }
`;

const BookStyled = styled(BsFillBookmarkPlusFill)`
  position: absolute;
  font-size: 30px;
  right: 1rem;
  height: 30px;
  object-fit: contain;
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 5px;
  top: 60px;

  &:hover {
    background-color: lightgray;
    cursor: pointer;
  }

  @media only screen and (max-width: ${mobileWidth}) {
    width: 20px;
    height: 20px;
    top: 50px;
  }
`;
