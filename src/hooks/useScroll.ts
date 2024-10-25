import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPokemonList } from "reducers/pokemon";
import { convertPokeData } from "utils/makeData";
import pokeData from "json/pokemonList.json";
import { RootState } from "store/store";

export function useScroll() {
  const [scroll, setScroll] = useState<number>(0);
  const dispatch = useDispatch();
  const { currentList } = useSelector((state: RootState) => state.pokemon);

  const onScroll = useCallback(() => {
    if (
      window.scrollY + document.documentElement.clientHeight >
      document.documentElement.scrollHeight - 20
    ) {
      setScroll(window.scrollY);
    }
  }, []);

  useEffect(() => {
    if (currentList.length === 0) {
      const list = convertPokeData(pokeData);
      dispatch(setPokemonList(list));
    }
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return { scroll };
}
