import { IPokemonList } from "../../../../interface/IPokemonList";
import styles from "./DetailBody.module.scss";
import { useNavigate } from "react-router-dom";
import React from "react";
import DetailList from "./detailList/DetailList";
import { getLineColor } from "../../../../utils/convert";
import BookComponent from "../../bookComponent/BookComponent";
import TypeDif from "../../typeDif/TypeDif";
import AbilityList from "./abilityList/AbilityList";
import DetailImg from "./detailImg/DetailImg";

interface IDetailBody {
  currentPoke: IPokemonList;
  originPoke: IPokemonList;
  megaPoke: IPokemonList | null;
  onChangeOrigin: () => void;
  onChangeMegaPoke: () => void;
  onChangeDymaxImg: (img: string) => void;
}

const DetailBody = ({
  currentPoke,
  megaPoke,
  originPoke,
  onChangeOrigin,
  onChangeMegaPoke,
  onChangeDymaxImg,
}: IDetailBody) => {
  const nav = useNavigate();

  function onTypeClick(type: string) {
    sessionStorage.setItem("type", type);
    nav("/type");
  }

  return (
    <div
      className={styles.body}
      style={{ borderColor: getLineColor(currentPoke!.types![0]) }}
    >
      <DetailImg
        currentPoke={currentPoke}
        megaPoke={megaPoke}
        originPoke={originPoke}
        onChangeOrigin={onChangeOrigin}
        onChangeMegaPoke={onChangeMegaPoke}
        onChangeDymaxImg={onChangeDymaxImg}
      />
      <BookComponent poke={currentPoke} />
      <div className={styles.detailTexts}>
        <div className={styles.header}>
          <div className={styles.num}>No.{currentPoke.id}</div>
          <div className={styles.name}>{currentPoke.name}</div>
          <div className={styles.generate}>{currentPoke.generate}</div>
          <TypeDif poke={currentPoke} />
        </div>
        <div className={styles.lists}>
          <DetailList items={currentPoke} type="분류" />
          <DetailList items={currentPoke} type="타입" onClick={onTypeClick} />
          <AbilityList items={currentPoke} type="특성" />
          <DetailList items={currentPoke} type="종족값" />
        </div>
      </div>
    </div>
  );
};

export default React.memo(DetailBody);
