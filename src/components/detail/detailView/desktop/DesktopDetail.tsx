import { IPokemonList } from "../../../../interface/IPokemonList";
import { LAST_NUM, getLineColor } from "../../../../utils/convert";
import styles from "./DesktopDetail.module.scss";
import DetailHeader from "./header/DetailHeader";
import DetailTexts from "./texts/DetailTexts";
import list from "../../../../json/pokemonList.json";
import { convertOnePoke } from "../../../../utils/makeData";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import AbilityModal from "../../../modal/abilityModal/AbilityModal";
import AddBookModal from "../../../modal/addBookModal/AddBookModal";
import { useBookList } from "../../../../hooks/useBookList";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
  BsHeart,
} from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";

type ARROWTYPE = "LEFT" | "RIGHT";

interface IDesktopDetail {
  currentPoke: IPokemonList;
}

const DesktopDetail = ({ currentPoke }: IDesktopDetail) => {
  const [pokeItem, setPokeItem] = useState<IPokemonList>(currentPoke);
  const [onBookModal, setOnBookModal] = useState<Boolean>(false);
  const { addPokeBook, bookPokeList, onRemove } = useBookList();
  const currentAbility = useSelector(
    (state: RootState) => state.datas.currentAbility
  );

  const onArrowClick = (type: ARROWTYPE) => {
    let item = null;
    if (type === "LEFT") {
      item = list.find((item) => item.id === pokeItem!.id - 1);
    } else {
      item = list.find((item) => item.id === pokeItem!.id + 1);
    }
    if (!item) return;
    const pokemon = convertOnePoke(item);
    sessionStorage.setItem("currentPoke", JSON.stringify(pokemon));
    setPokeItem(pokemon);
  };

  function onCloseBookModal() {
    setOnBookModal(false);
  }

  return (
    <div className={styles.desktopDetail}>
      {pokeItem!.id !== 1 && (
        <BsFillArrowLeftCircleFill
          className={styles.arrow}
          onClick={() => onArrowClick("LEFT")}
        />
      )}
      <DetailHeader />
      <div
        className={styles.container}
        style={{ borderColor: getLineColor(pokeItem!.types![0]) }}
      >
        {bookPokeList.find((item: IPokemonList) => item.id === pokeItem.id) ? (
          <BsHeartFill
            className={styles.heart}
            onClick={() => onRemove(pokeItem)}
          />
        ) : (
          <BsHeart
            className={styles.emptyHeart}
            onClick={() => addPokeBook(pokeItem, () => setOnBookModal(true))}
          />
        )}
        <img src={pokeItem.imageUrl} alt="img" className={styles.img} />
        <DetailTexts currentPoke={pokeItem} />
      </div>
      {pokeItem!.id !== LAST_NUM && (
        <BsFillArrowRightCircleFill
          className={styles.arrow}
          onClick={() => onArrowClick("RIGHT")}
        />
      )}
      {currentAbility && <AbilityModal />}
      {onBookModal && <AddBookModal onCloseBookModal={onCloseBookModal} />}
    </div>
  );
};

export default DesktopDetail;
