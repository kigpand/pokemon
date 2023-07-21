import { IPokemonList } from "../../../../interface/IPokemonList";
import styles from "./DetailBody.module.scss";
import { useNavigate } from "react-router-dom";
import React from "react";
import TextItem from "./textItem/TextItem";
import { getLineColor } from "../../../../utils/convert";
import BookComponent from "../../bookComponent/BookComponent";
import TypeDif from "../../typeDif/TypeDif";

interface IDetailBody {
  currentPoke: IPokemonList;
}

const DetailBody = ({ currentPoke }: IDetailBody) => {
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
      <img src={currentPoke.imageUrl} alt="img" className={styles.img} />
      <BookComponent poke={currentPoke} />
      <div className={styles.detailTexts}>
        <div className={styles.header}>
          <div className={styles.num}>No.{currentPoke.id}</div>
          <div className={styles.name}>{currentPoke.name}</div>
          <div className={styles.generate}>{currentPoke.generate}</div>
          <TypeDif poke={currentPoke} />
        </div>
        <div className={styles.lists}>
          <TextItem items={currentPoke} type="분류" />
          <TextItem items={currentPoke} type="타입" onClick={onTypeClick} />
          <TextItem items={currentPoke} type="특성" />
          <TextItem items={currentPoke} type="종족값" />
        </div>
      </div>
    </div>
  );
};

export default React.memo(DetailBody);
