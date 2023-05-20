import styles from "./pokemonList.module.scss";
import { useNavigate } from "react-router-dom";
import { IPokemonList } from "../../interface/IPokemonList";
import { MouseEvent } from "react";

interface IPokeMonList {
  pokemon: IPokemonList;
}

const PokemonList = ({ pokemon }: IPokeMonList) => {
  const nav = useNavigate();

  function onNav(e: MouseEvent<HTMLDivElement>) {
    sessionStorage.setItem("currentPoke", JSON.stringify(pokemon));
    nav("/detail");
  }

  return (
    <div className={styles.list} onClick={(e) => onNav(e)}>
      <div className={styles.num}>No.{pokemon.id}</div>
      <img
        className={styles.img}
        src={pokemon.imageUrl}
        alt={pokemon.name}
      ></img>
      <div className={styles.name}>{pokemon.name}</div>
    </div>
  );
};

export default PokemonList;
