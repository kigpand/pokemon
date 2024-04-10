import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { KeyboardEvent } from "react";
import { useState } from "react";
import { BsFilterRight } from "react-icons/bs";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { mobileWidth } from "styles/globalstyles";
import { IPokemonList } from "interface/IPokemonList";
import { onSearchItem } from "utils/makeData";
import { useStorage } from "hooks/useStorage";
import LOGO from "imgs/logo.png";
import styled from "styled-components";
import MainType from "./MainType";
import MainThemeToggle from "./MainThemeToggle";
import SortModal from "components/modal/SortModal";

const MainHeader = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const [onSortModal, setOnSortModal] = useState<Boolean>(false);
  const nav = useNavigate();
  const { setCurrentPokeStorage } = useStorage();

  function onSearch(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      onSearchItem(searchRef, (poke: IPokemonList) =>
        setCurrentPokeStorage(poke)
      );
    }
  }

  function moveToBook() {
    nav("/books");
  }

  return (
    <HeaderStyled>
      <MainType />
      <LogoWrapper>
        <img src={LOGO} alt="logo" />
        <SearchStyled
          type="text"
          ref={searchRef}
          placeholder="도감번호나 이름을 입력해주세요"
          onKeyDown={onSearch}
        ></SearchStyled>
      </LogoWrapper>
      <SideItemWrapper>
        <FirstSide>
          <MainThemeToggle />
          <SortStyled onClick={() => setOnSortModal(true)} />
        </FirstSide>
        <BookStyled onClick={moveToBook} />
      </SideItemWrapper>
      {onSortModal && <SortModal closeSort={() => setOnSortModal(false)} />}
    </HeaderStyled>
  );
};

export default MainHeader;

const HeaderStyled = styled.header`
  width: 90%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 10px;
  padding: 30px 0px;

  @media only screen and (max-width: ${mobileWidth}) {
    width: 90%;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;

  img {
    width: 150px;
    height: 50px;
  }
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
    width: 200px;
  }
`;

const SideItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1px;
`;

const FirstSide = styled.div`
  display: flex;
  gap: 1px;
`;

const SortStyled = styled(BsFilterRight)`
  font-size: 45px;
  height: 45px;
  object-fit: contain;
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 5px;

  &:hover {
    background-color: lightgray;
    cursor: pointer;
  }

  @media only screen and (max-width: ${mobileWidth}) {
    width: 30px;
    height: 30px;
  }
`;

const BookStyled = styled(BsFillBookmarkPlusFill)`
  font-size: 45px;
  height: 45px;
  object-fit: contain;
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 5px;

  &:hover {
    background-color: lightgray;
    cursor: pointer;
  }

  @media only screen and (max-width: ${mobileWidth}) {
    width: 30px;
    height: 30px;
  }
`;
