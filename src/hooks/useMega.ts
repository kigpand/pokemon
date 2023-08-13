import { useEffect, useState } from "react";
import { IPokemonList } from "../interface/IPokemonList";
import megaList from "../json/mega.json";
import { convertOnePoke } from "../utils/makeData";

export function useMega(poke: IPokemonList) {
  const [megaPoke, setMegaPoke] = useState<
    IPokemonList | IPokemonList[] | null
  >(null);

  // 메가진화 가능한지 파악
  useEffect(() => {
    if (poke) {
      // 리자몽 or 뮤츠일 경우
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
          setMegaPoke(convert);
        } else {
          setMegaPoke(null);
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
          setMegaPoke(data);
        } else {
          setMegaPoke(null);
        }
      }
    }
  }, [poke]);

  return { megaPoke };
}
