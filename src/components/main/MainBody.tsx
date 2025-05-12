/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { mobileWidth } from "styles/globalstyles";
import { RootState } from "store/store";
import type { IPokemonList } from "interface/IPokemonList";
import { setCurrentList } from "reducers/pokemon";
import styled from "styled-components";
import PokemonList from "components/pokemonList/PokemonList";
import { useScroll } from "hooks/useScroll";

const MainBody = () => {
  const { scroll } = useScroll();
  const { pokemonList, currentList } = useSelector(
    (state: RootState) => state.pokemon
  );
  const dispatch = useDispatch();

  function returnToTop() {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    if (scroll !== 0) {
      const count = currentList.length;
      dispatch(setCurrentList(pokemonList.slice(count, count + 9)));
    }
  }, [scroll]);

  useEffect(() => {
    if (pokemonList.length > 0 && currentList.length === 0) {
      dispatch(setCurrentList(pokemonList.slice(0, 20)));
    }
  }, [pokemonList]);

  return (
    <MainStyled>
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
