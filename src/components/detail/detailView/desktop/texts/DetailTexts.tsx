import { useDispatch } from "react-redux";
import { IPokemonList } from "../../../../../interface/IPokemonList";
import styles from "./DetailTexts.module.scss";
import { setCurrentAbility } from "../../../../../reducers/datas";
import { useNavigate } from "react-router-dom";
import React from "react";
import TextItem from "./textItem/TextItem";

interface IDetailTexts {
  currentPoke: IPokemonList;
}

const DetailTexts = ({ currentPoke }: IDetailTexts) => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  function onAbility(ability: string) {
    dispatch(setCurrentAbility(ability));
  }

  function onTypeClick(type: string) {
    sessionStorage.setItem("type", type);
    nav("/type");
  }

  return (
    <div className={styles.detailTexts}>
      <div className={styles.header}>
        <div className={styles.num}>No.{currentPoke!.id}</div>
        <div className={styles.name}>{currentPoke!.name}</div>
        <div className={styles.generate}>{currentPoke!.generate}</div>
      </div>
      <div className={styles.lists}>
        <TextItem items={currentPoke} type="분류" />
        <TextItem items={currentPoke} type="타입" onClick={onTypeClick} />
        <TextItem items={currentPoke} type="특성" onClick={onAbility} />
        <TextItem items={currentPoke} type="종족값" />
      </div>
    </div>
  );
};

export default React.memo(DetailTexts);
