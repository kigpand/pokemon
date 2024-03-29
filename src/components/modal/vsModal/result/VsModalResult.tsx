import { useSelector } from "react-redux";
import { IPokemonList } from "../../../../interface/IPokemonList";
import { SortType } from "../../../../typedef/SortType";
import { baseStat } from "../../../../utils/base";
import {
  getStatKorea,
  getStatusBarColor,
  getTypeIcon,
} from "../../../../utils/convert";
import styles from "./VsModalResult.module.scss";
import { RootState } from "../../../../store/store";

type Props = {
  currentPoke: IPokemonList;
  searchPoke: IPokemonList;
};

function PokeList({
  poke,
  vsPoke,
}: {
  poke: IPokemonList;
  vsPoke: IPokemonList;
}) {
  return (
    <article className={styles.container}>
      <div style={{ textAlign: "center", padding: "10px 0" }}>
        <img src={poke.imageUrl} alt="imageUrl" className={styles.pokeImg} />
      </div>
      <label className={styles.label}>타입</label>
      <div className={styles.types}>
        {poke.types?.map((type, i) => {
          return (
            <span key={i}>
              <img
                src={getTypeIcon(type)}
                alt="typeImg"
                className={styles.typeImg}
              />
            </span>
          );
        })}
      </div>
      <label className={styles.label}>종족값</label>
      {baseStat.map((item: SortType, i: number) => {
        return (
          <span
            className={styles.stat}
            style={{ color: getStatusBarColor(item) }}
            key={i}
          >
            <div className={styles.item}>{getStatKorea(item)}</div>
            <div className={styles.value}>{poke[item]}</div>
            {poke[item] > vsPoke[item] && (
              <img
                src={`${process.env.PUBLIC_URL}/imgs/win.png`}
                alt="winImg"
                className={styles.winImg}
              />
            )}
          </span>
        );
      })}
    </article>
  );
}

export default function VsModalResult({ currentPoke, searchPoke }: Props) {
  const theme = useSelector((state: RootState) => state.datas.theme);

  return (
    <div
      className={styles.resultModal}
      style={{ backgroundColor: theme === "dark" ? "black" : "white" }}
    >
      <div className={styles.title}>
        {currentPoke.name} vs {searchPoke.name}
      </div>
      <div className={styles.pokeContainer}>
        <PokeList poke={currentPoke} vsPoke={searchPoke} />
        <PokeList poke={searchPoke} vsPoke={currentPoke} />
      </div>
    </div>
  );
}
