import { useMemo } from "react";
import type { IPokemonList } from "../interface/IPokemonList";
import megaList from "../json/mega.json";
import { convertOnePoke } from "../utils/makeData";

export function useMega(poke: IPokemonList | null) {
  const megaPoke = useMemo(() => {
    if (!poke) return null;
    if (poke.id === 6 || poke.id === 150) {
      const result = megaList.filter((item: any) => item.id === poke.id);
      if (result) {
        const convert = result.map((list: any) => {
          const convertData = {
            ...list,
            generate: poke.generate,
            flavor: poke.flavor,
          };
          const data = convertOnePoke(convertData);
          return data;
        });
        return convert;
      } else {
        return null;
      }
    } else {
      const result = megaList.find((item: any) => item.id === poke.id);
      if (result) {
        const convertData = {
          ...result,
          generate: poke.generate,
          flavor: poke.flavor,
        };
        const data = convertOnePoke(convertData);
        return data;
      } else {
        return null;
      }
    }
  }, [poke]);

  return { megaPoke };
}
