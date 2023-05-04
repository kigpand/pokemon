import { useDispatch, useSelector } from "react-redux";
import { IPokemonList } from "../../../interface/IPokemonList";
import { getColor, getStatusBarColor, getTypeKo } from "../../../utils/convert";
import AbilityModal from "../../abilityModal/AbilityModal";
import AddBookModal from "../../addBookModal/AddBookModal";
import styles from "./MobileDetail.module.scss";
import { RootState } from "../../../store/store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setCurrentAbility } from "../../../reducers/datas";
import ADDBTN from "../../../imgs/addBtn.png";
import QUESTION from "../../../imgs/question.png";
import { useBookList } from "../../../hooks/useBookList";

interface IMobileDetail {
  currentPoke: IPokemonList;
}

interface IStateItem {
  name: string;
  stat: string | number;
}

const MobileDetail = ({ currentPoke }: IMobileDetail) => {
  const currentAbility = useSelector(
    (state: RootState) => state.datas.currentAbility
  );
  const [onBookModal, setOnBookModal] = useState<Boolean>(false);
  const { addPokeBook } = useBookList();
  const nav = useNavigate();
  const dispatch = useDispatch();

  function onCloseBtn() {
    sessionStorage.removeItem("currentPoke");
    nav(-1);
  }

  function onTypeClick(type: string) {
    sessionStorage.setItem("type", type);
    nav("/type");
  }

  function onAbility(ability: string) {
    dispatch(setCurrentAbility(ability));
  }

  function onCloseBookModal() {
    setOnBookModal(false);
  }

  return (
    <div className={styles.mobileDetail}>
      <div
        className={styles.container}
        style={{ borderColor: getColor(currentPoke.types![0]) }}
      >
        <img
          src={ADDBTN}
          alt="추가버튼"
          className={styles.addBookBtn}
          onClick={() => addPokeBook(currentPoke, () => setOnBookModal(true))}
        ></img>
        <div
          className={styles.closeBtn}
          style={{
            borderColor: getColor(currentPoke?.types![0]),
            color: getColor(currentPoke?.types![0]),
          }}
          onClick={onCloseBtn}
        >
          X
        </div>
        <div className={styles.num}>
          No.{currentPoke?.id} {currentPoke.name}
        </div>
        <div
          className={styles.generate}
          style={{ borderColor: getColor(currentPoke?.types![0]) }}
        >
          {currentPoke.generate}
        </div>
        <div className={styles.imgInfo}>
          <img
            src={currentPoke.imageUrl}
            alt={currentPoke.name}
            className={styles.img}
          ></img>
          <div className={styles.wHstat}>
            <div>키: {currentPoke.height / 10}m</div>
            <div>몸무게: {currentPoke.weight / 10}kg</div>
          </div>
        </div>
        <div className={styles.genus}>
          <div
            className={styles.miniTitle}
            style={{ backgroundColor: getColor(currentPoke.types![0]) }}
          >
            분류
          </div>
          <div className={styles.mainContents}>
            <span>{currentPoke.genus}</span>
          </div>
        </div>
        <div className={styles.types}>
          <div
            className={styles.miniTitle}
            style={{ backgroundColor: getColor(currentPoke.types![0]) }}
          >
            타입
          </div>
          <div className={styles.mainContents}>
            {currentPoke?.types &&
              currentPoke?.types.map((type, i) => {
                return (
                  <span
                    key={i}
                    className={styles.type}
                    style={{ backgroundColor: getColor(type) }}
                    onClick={() => onTypeClick(type)}
                  >
                    {getTypeKo(type)}
                  </span>
                );
              })}
          </div>
        </div>
        <div className={styles.abilities}>
          <div
            className={styles.miniTitle}
            style={{ backgroundColor: getColor(currentPoke.types![0]) }}
          >
            특성
          </div>
          <div className={styles.mainContents}>
            {currentPoke?.abilities &&
              currentPoke?.abilities.map((abil, i) => {
                return (
                  <span onClick={() => onAbility(abil)} key={i}>
                    {abil}
                    <img src={QUESTION} alt="question" />
                  </span>
                );
              })}
          </div>
        </div>
        <div className={styles.status}>
          <div
            className={styles.miniTitle}
            style={{ backgroundColor: getColor(currentPoke.types![0]) }}
          >
            종족값
          </div>
          <div className={styles.mainContents}>
            {currentPoke?.stats &&
              currentPoke?.stats.map((stat: IStateItem, i: number) => {
                const backgroudColor = getStatusBarColor(stat.name);
                return (
                  <div className={styles.statusItem} key={i}>
                    <div
                      className={styles.statusTitle}
                      style={{ borderColor: backgroudColor }}
                    >
                      {stat.name}
                    </div>
                    <div
                      className={styles.statusBar}
                      style={{
                        width: `${stat.name === "총합" ? 200 : stat.stat}px`,
                      }}
                    >
                      <div style={{ backgroundColor: backgroudColor }}>
                        {stat.stat}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <b style={{ paddingLeft: "5px" }}>정보</b>
        <div className={styles.flavor}>
          <div>{currentPoke?.flavor}</div>
        </div>
      </div>
      {currentAbility && <AbilityModal />}
      {onBookModal && <AddBookModal onCloseBookModal={onCloseBookModal} />}
    </div>
  );
};

export default MobileDetail;
