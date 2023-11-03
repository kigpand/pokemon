import { RefObject } from "react";
import { IPokemonList } from "../interface/IPokemonList";
import { IPrevList } from "../interface/IPrveList";
import { getStat, getTypeConvertData } from "./convert";
import list from "../json/pokemonList.json";

export function convertPokeData(list: IPrevList[]) {
  const pokeList: IPokemonList[] = [];
  list.forEach((item: IPrevList) => {
    const abilities = item.abilities.split(",");
    const types = getTypeConvertData(item.pokeTypes);
    const stat = getStat(item.states);
    pokeList.push({
      id: item.id,
      name: item.name,
      weight: item.weight,
      height: item.height,
      flavor: item.flavor,
      generate: item.generate,
      imageUrl: item.imageUrl,
      genus: item.genus,
      abilities,
      types,
      ...stat,
    });
  });

  return pokeList;
}

export function convertOnePoke(item: IPrevList) {
  const abilities = item.abilities.split(",");
  const types = getTypeConvertData(item.pokeTypes);
  const stat = getStat(item.states);
  return {
    id: item.id,
    name: item.name,
    weight: item.weight,
    height: item.height,
    flavor: item.flavor,
    generate: item.generate,
    imageUrl: item.imageUrl,
    genus: item.genus,
    abilities,
    types,
    ...stat,
  };
}

export function onSearchItem(
  searchRef: RefObject<HTMLInputElement>,
  callback: any
) {
  if (!searchRef.current) return;
  const isNaN = Number.isNaN(Number(searchRef.current!.value));
  const item = isNaN
    ? list.find((item) => item.name === searchRef.current?.value)
    : list.find((item) => item.id === Number(searchRef.current?.value));
  if (item) {
    const pokemon = convertOnePoke(item);
    callback(pokemon);
  } else {
    alert("올바른 도감번호를 입력해주세요.");
  }

  searchRef.current!.value = "";
}
