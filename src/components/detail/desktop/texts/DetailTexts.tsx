import { useDispatch } from "react-redux";
import { IPokemonList } from "../../../../interface/IPokemonList";
import styles from "./DetailTexts.module.scss";
import { setCurrentAbility } from "../../../../reducers/datas";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import TextItem from "./textItem/TextItem";
import TypeDetail from "../../typeDetail/TypeDetail";

interface IDetailTexts {
  currentPoke: IPokemonList;
}

const DetailTexts = ({ currentPoke }: IDetailTexts) => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [typeDetail, setTypeDetail] = useState<boolean>(false);

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
        <div className={styles.vs} onClick={() => setTypeDetail(true)}>
          상성표 보기
        </div>
      </div>
      <div className={styles.lists}>
        <TextItem items={currentPoke} type="분류" />
        <TextItem items={currentPoke} type="타입" onClick={onTypeClick} />
        <TextItem items={currentPoke} type="특성" onClick={onAbility} />
        <TextItem items={currentPoke} type="종족값" />
      </div>
      {typeDetail && (
        <TypeDetail
          typeArr={currentPoke!.types || []}
          onCloseType={() => setTypeDetail(false)}
        />
      )}
    </div>
  );
};

export default React.memo(DetailTexts);
