import { useCallback } from "react";
import { IPokemonList } from "../../interface/IPokemonList";
import { useNavigate } from "react-router-dom";
import { useBookList } from "../../hooks/useBookList";
import { mobileWidth } from "styles/globalstyles";
import styled from "styled-components";

const BookFooter = () => {
  const { bookPokeList } = useBookList();
  const nav = useNavigate();

  function onBackBtn() {
    nav(-1);
  }

  const getData = useCallback(
    (isAvg: boolean) => {
      if (bookPokeList.length > 0) {
        let totalData: number = 0;
        bookPokeList.forEach((pokeList: IPokemonList) => {
          totalData += pokeList.allStat;
        });
        if (isAvg) {
          return Math.ceil(totalData / bookPokeList.length);
        }
        return totalData;
      }
      return 0;
    },
    [bookPokeList]
  );

  return (
    <FooterWrapper>
      {bookPokeList.length > 0 ? (
        <TotalData>
          <div>평균 종족치: {getData(true)}</div>
          <div>총 종족치: {getData(false)}</div>
        </TotalData>
      ) : (
        <Noting>도감에 저장된 포켓몬이 없습니다.</Noting>
      )}
      <BackButton onClick={onBackBtn}>&lt; 뒤로가기</BackButton>
    </FooterWrapper>
  );
};

export default BookFooter;

const FooterWrapper = styled.footer`
  width: 70%;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: ${mobileWidth}) {
    width: 100%;
  }
`;

const Noting = styled.div`
  height: 300px;
  line-height: 300px;
  color: gray;
  font-weight: bold;
`;

const TotalData = styled.div`
  width: 100%;
  height: 50px;

  div {
    line-height: 50px;
    font-weight: bold;
    margin-bottom: 10px;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    height: 100%;
    width: 100%;
  }
`;

const BackButton = styled.div`
  display: none;
  font-weight: bold;
  position: absolute;
  bottom: 20px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  @media only screen and (max-width: ${mobileWidth}) {
    display: block;
  }
`;
