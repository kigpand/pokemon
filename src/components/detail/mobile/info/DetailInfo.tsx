import { IPokemonList } from "../../../../interface/IPokemonList";
import styles from "./DetailInfo.module.scss";
import TypeDif from "../../typeDif/TypeDif";
import { useDymax } from "../../../../hooks/useDymax";

type Props = {
  poke: IPokemonList;
  currentPoke: IPokemonList;
  megaPoke: IPokemonList | null;
  onChangeOrigin: () => void;
  onChangeMega: () => void;
  onChangeDymax: (dymax: string) => void;
};

const DetailInfo = ({
  poke,
  currentPoke,
  megaPoke,
  onChangeOrigin,
  onChangeMega,
  onChangeDymax,
}: Props) => {
  const { dymax } = useDymax(currentPoke);

  return (
    <div className={styles.info}>
      <div className={styles.imgText}>
        {poke.imageUrl !== currentPoke.imageUrl && (
          <div className={styles.origin} onClick={onChangeOrigin}>
            원본 포켓몬
          </div>
        )}
        {megaPoke && (
          <div className={styles.mega} onClick={onChangeMega}>
            메가진화
          </div>
        )}
        {dymax && (
          <div className={styles.dymax} onClick={() => onChangeDymax(dymax)}>
            거다이맥스
          </div>
        )}
      </div>
      <img
        src={poke.imageUrl}
        alt={poke.name}
        className={styles.img}
        referrerPolicy="no-referrer"
      ></img>
      <TypeDif poke={poke} />
      <div className={styles.wHstat}>
        <div>키: {poke.height / 10}m</div>
        <div>몸무게: {poke.weight / 10}kg</div>
      </div>
    </div>
  );
};

export default DetailInfo;
