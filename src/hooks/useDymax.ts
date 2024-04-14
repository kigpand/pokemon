import { useMemo } from "react";
import { IPokemonList } from "../interface/IPokemonList";
import pokeList from "../json/gigantamax.json";

export function useDymax(poke: IPokemonList) {
  const dymax = useMemo(() => {
    const result = pokeList.find((item: any) => item.id === poke.id);
    return result ? result.imageUrl : null;
  }, [poke]);

  return { dymax };
}
