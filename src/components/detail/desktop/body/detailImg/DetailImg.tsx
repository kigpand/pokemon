import { IPokemonList } from "../../../../../interface/IPokemonList";
import styles from "./DetailImg.module.scss";

type Props = {
  currentPoke: IPokemonList;
};

const DetailImg = ({ currentPoke }: Props) => {
  return (
    <div className={styles.imgs}>
      <img
        src={currentPoke.imageUrl}
        alt="img"
        className={styles.img}
        referrerPolicy="no-referrer"
      />
      <div className={styles.imgText}>
        another form
        {/* {originPoke.imageUrl !== currentPoke.imageUrl && (
          <div className={styles.origin} onClick={onChangeOrigin}>
            원본 포켓몬
          </div>
        )}
        {megaPoke && (
          <div className={styles.mega} onClick={onChangeMegaPoke}>
            메가진화
          </div>
        )}
        {dymax && (
          <div className={styles.dymax} onClick={() => onChangeDymaxImg(dymax)}>
            거다이맥스
          </div>
        )} */}
      </div>
    </div>
  );
};

export default DetailImg;
