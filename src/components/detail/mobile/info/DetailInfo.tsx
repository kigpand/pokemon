import { IPokemonList } from "../../../../interface/IPokemonList";
import styles from "./DetailInfo.module.scss";
import TypeDif from "../../typeDif/TypeDif";

type Props = {
  currentPoke: IPokemonList;
};

const DetailInfo = ({ currentPoke }: Props) => {
  return (
    <div className={styles.info}>
      <img
        src={currentPoke.imageUrl}
        alt={currentPoke.name}
        className={styles.img}
      ></img>
      <TypeDif poke={currentPoke} />
      <div className={styles.wHstat}>
        <div>키: {currentPoke.height / 10}m</div>
        <div>몸무게: {currentPoke.weight / 10}kg</div>
      </div>
    </div>
  );
};

export default DetailInfo;
