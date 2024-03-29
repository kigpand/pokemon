/* eslint-disable react-hooks/exhaustive-deps */
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonList from "../../pokemonList/pokemonList";
import styles from "./mainBody.module.scss";
import { RootState } from "../../../store/store";
import { IPokemonList } from "../../../interface/IPokemonList";
import { convertPokeData } from "../../../utils/makeData";
import { setCurrentList, setPokemonList } from "../../../reducers/pokemon";
import pokeData from "../../../json/pokemonList.json";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

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
    if (pokemonList.length === 0) {
      const loadList: IPokemonList[] = convertPokeData(pokeData);
      dispatch(setPokemonList(loadList));
    }
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (pokemonList.length > 0 && currentList.length === 0) {
      const setting: IPokemonList[] = [];
      for (let i = 0; i < 20; i++) {
        setting.push(pokemonList[i]);
      }
      dispatch(setCurrentList(setting));
    }
  }, [pokemonList]);

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
      const item: IPokemonList[] = [];
      const count = currentList.length;
      for (let i = count; i < count + 10; i++) {
        if (pokemonList[i]) item.push(pokemonList[i]);
      }
      dispatch(setCurrentList(item));
    }
  }, [scroll]);

  return (
    <div className={styles.mainBody} ref={bodyRef}>
      <div className={styles.lists}>
        {currentList.map((data: IPokemonList, i: number) => {
          return <PokemonList pokemon={data} key={i} />;
        })}
      </div>
      <BsFillArrowUpCircleFill
        className={styles.topBtn}
        onClick={returnToTop}
      />
    </div>
  );
};

export default MainBody;
