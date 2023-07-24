import { useEffect, useState } from "react";
import { IPokemonList } from "../interface/IPokemonList";
import pokeList from "../json/gigantamax.json";
import { convertOnePoke } from "../utils/makeData";

export function useDymax(poke: IPokemonList) {
  const [dymax, setDymax] = useState<string | null>(null);

  useEffect(() => {
    if (poke) {
      const result = pokeList.find((item: any) => item.id === poke.id);
      if (result) {
        setDymax(result.imageUrl);
      } else {
        setDymax(null);
      }
    }
  }, [poke]);

  return { dymax };
}
