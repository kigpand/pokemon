import { useDispatch } from "react-redux";
import { IPokemonList } from "../../../../interface/IPokemonList";
import styles from "./DetailBody.module.scss";
import { setCurrentAbility } from "../../../../reducers/datas";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import TextItem from "./textItem/TextItem";
import TypeDetail from "../../typeDetail/TypeDetail";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useBookList } from "../../../../hooks/useBookList";
import AddBookModal from "../../../modal/addBookModal/AddBookModal";
import { getLineColor } from "../../../../utils/convert";

interface IDetailBody {
  currentPoke: IPokemonList;
}

const DetailBody = ({ currentPoke }: IDetailBody) => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [typeDetail, setTypeDetail] = useState<boolean>(false);
  const { addPokeBook, bookPokeList, onRemove } = useBookList();
  const [onBookModal, setOnBookModal] = useState<Boolean>(false);

  function onAbility(ability: string) {
    dispatch(setCurrentAbility(ability));
  }

  function onTypeClick(type: string) {
    sessionStorage.setItem("type", type);
    nav("/type");
  }

  function onCloseType() {
    setTypeDetail(false);
  }

  function onCloseBookModal() {
    setOnBookModal(false);
  }

  return (
    <div
      className={styles.body}
      style={{ borderColor: getLineColor(currentPoke!.types![0]) }}
    >
      {bookPokeList.find((item: IPokemonList) => item.id === currentPoke.id) ? (
        <BsHeartFill
          className={styles.heart}
          onClick={() => onRemove(currentPoke)}
        />
      ) : (
        <BsHeart
          className={styles.emptyHeart}
          onClick={() => addPokeBook(currentPoke, () => setOnBookModal(true))}
        />
      )}
      <img src={currentPoke.imageUrl} alt="img" className={styles.img} />
      <div className={styles.detailTexts}>
        <div className={styles.header}>
          <div className={styles.num}>No.{currentPoke!.id}</div>
          <div className={styles.name}>{currentPoke!.name}</div>
          <div className={styles.generate}>{currentPoke!.generate}</div>
          <div className={styles.vs} onClick={() => setTypeDetail(true)}>
            상성표 보기
          </div>
          {typeDetail && (
            <TypeDetail
              typeArr={currentPoke!.types || []}
              onCloseType={onCloseType}
            />
          )}
        </div>
        <div className={styles.lists}>
          <TextItem items={currentPoke} type="분류" />
          <TextItem items={currentPoke} type="타입" onClick={onTypeClick} />
          <TextItem items={currentPoke} type="특성" onClick={onAbility} />
          <TextItem items={currentPoke} type="종족값" />
        </div>
      </div>
      {onBookModal && <AddBookModal onCloseBookModal={onCloseBookModal} />}
    </div>
  );
};

export default React.memo(DetailBody);
