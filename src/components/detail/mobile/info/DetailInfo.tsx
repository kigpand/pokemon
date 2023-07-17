import { useState } from "react";
import { IPokemonList } from "../../../../interface/IPokemonList";
import TypeDetail from "../../typeDetail/TypeDetail";
import styles from "./DetailInfo.module.scss";

type Props = {
  currentPoke: IPokemonList;
};

const DetailInfo = ({ currentPoke }: Props) => {
  const [typeDetail, setTypeDetail] = useState<boolean>(false);

  function onCloseType() {
    setTypeDetail(false);
  }

  return (
    <div className={styles.info}>
      <img
        src={currentPoke.imageUrl}
        alt={currentPoke.name}
        className={styles.img}
      ></img>
      <div className={styles.vs} onClick={() => setTypeDetail(true)}>
        상성표 보기
      </div>
      <div className={styles.wHstat}>
        <div>키: {currentPoke.height / 10}m</div>
        <div>몸무게: {currentPoke.weight / 10}kg</div>
      </div>
      {typeDetail && (
        <TypeDetail
          typeArr={currentPoke!.types || []}
          onCloseType={onCloseType}
        />
      )}
    </div>
  );
};

export default DetailInfo;
