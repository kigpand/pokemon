/* eslint-disable react-hooks/exhaustive-deps */
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { mobileWidth } from "styles/globalstyles";
import { RootState } from "store/store";
import { IPokemonList } from "interface/IPokemonList";
import { convertPokeData } from "utils/makeData";
import { setCurrentList, setPokemonList } from "reducers/pokemon";
import styled from "styled-components";
import pokeData from "json/pokemonList.json";
import PokemonList from "components/pokemonList/PokemonList";

const MainBody = () => {
  const [scroll, setScroll] = useState<number>(0);
  const { pokemonList, currentList } = useSelector(
    (state: RootState) => state.pokemon
  );
  const bodyRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  function returnToTop() {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    const list = convertPokeData(pokeData);
    dispatch(setPokemonList(list));
    dispatch(setCurrentList(list.slice(0, 20)));
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onScroll = () => {
    if (
      window.scrollY + document.documentElement.clientHeight >
      document.documentElement.scrollHeight - 20
    ) {
      setScroll(window.scrollY);
    }
  };

  useEffect(() => {
    if (scroll !== 0) {
      const count = currentList.length;
      dispatch(setCurrentList(pokemonList.slice(count, count + 9)));
    }
  }, [scroll]);

  return (
    <MainStyled ref={bodyRef}>
      <ListWrapper>
        {currentList.map((data: IPokemonList, i: number) => {
          return <PokemonList pokemon={data} key={i} />;
        })}
      </ListWrapper>
      <TopButton onClick={returnToTop} />
    </MainStyled>
  );
};

export default MainBody;

const MainStyled = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
`;

const ListWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  justify-content: center;

  @media only screen and (max-width: ${mobileWidth}) {
    grid-template-columns: repeat(2, 2fr);
  }
`;

const TopButton = styled(BsFillArrowUpCircleFill)`
  bottom: 20px;
  right: 20px;
  position: fixed;
  width: 50px;
  height: 50px;
  border-radius: 90%;
  color: rgb(119, 217, 255);

  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: ${mobileWidth}) {
    right: 10%;
  }
`;
