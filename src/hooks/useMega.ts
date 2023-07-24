import { useEffect, useState } from "react";
import { IPokemonList } from "../interface/IPokemonList";
import megaList from "../json/mega.json";
import { convertOnePoke } from "../utils/makeData";

export function useMega(poke: IPokemonList) {
  const [megaPoke, setMegaPoke] = useState<IPokemonList | null>(null);

  useEffect(() => {
    if (poke) {
      const result = megaList.find((item: any) => item.id === poke.id);
      if (result) {
        const convertData = {
          ...result,
          generate: poke.generate,
          flavor: poke.flavor,
        };
        const data = convertOnePoke(convertData);
        setMegaPoke(data);
      } else {
        setMegaPoke(null);
      }
    }
  }, [poke]);

  return { megaPoke };
}
