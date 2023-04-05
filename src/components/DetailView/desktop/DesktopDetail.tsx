import { IPokemonList } from "../../../interface/IPokemonList";
import { getLineColor } from "../../../utils/convert";
import styles from "./DesktopDetail.module.scss";
import DetailHeader from "./header/DetailHeader";
import DetailTexts from "./texts/DetailTexts";
import list from "../../../json/pokemonList.json";
import { convertOnePoke } from "../../../utils/makeData";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import AbilityModal from "../../abilityModal/AbilityModal";
import ARROW from "../../../imgs/left.png";
import { setBookPokeList } from "../../../reducers/pokemon";
import AddBookModal from "../../addBookModal/AddBookModal";
import BOOK from "../../../imgs/book.png";

interface IDesktopDetail {
  currentPoke: IPokemonList;
}

const DesktopDetail = ({ currentPoke }: IDesktopDetail) => {
  const [pokeItem, setPokeItem] = useState<IPokemonList>(currentPoke);
  const dispatch = useDispatch();
  const [onBookModal, setOnBookModal] = useState<Boolean>(false);
  const bookPokeList = useSelector(
    (state: RootState) => state.pokemon.bookPokeList
  );
  const currentAbility = useSelector(
    (state: RootState) => state.datas.currentAbility
  );

  const onLeftArrow = () => {
    const item = list.find((item) => item.id === pokeItem!.id - 1);
    if (!item) return;
    const pokemon = convertOnePoke(item);
    sessionStorage.setItem("currentPoke", JSON.stringify(pokemon));
    setPokeItem(pokemon);
  };

  const onRightArrow = () => {
    const item = list.find((item) => item.id === pokeItem!.id + 1);
    if (!item) return;
    const pokemon = convertOnePoke(item);
    sessionStorage.setItem("currentPoke", JSON.stringify(pokemon));
    setPokeItem(pokemon);
  };

  function addPokeBook() {
    if (currentPoke) {
      const result = bookPokeList.find(
        (pokeList: IPokemonList) => pokeList.id === pokeItem.id
      );
      if (result) {
        alert("이미 도감에 등록된 포켓몬입니다.");
        return;
      }
      dispatch(setBookPokeList(pokeItem));
      setOnBookModal(true);
    }
  }

  function onCloseBookModal() {
    setOnBookModal(false);
  }

  return (
    <div className={styles.desktopDetail}>
      {pokeItem!.id !== 1 && (
        <img
          className={styles.left}
          src={ARROW}
          onClick={onLeftArrow}
          alt="왼쪽"
        ></img>
      )}
      <DetailHeader />
      <div
        className={styles.container}
        style={{ borderColor: getLineColor(pokeItem!.types![0]) }}
      >
        <img
          src={BOOK}
          alt="img"
          className={styles.book}
          onClick={addPokeBook}
        />
        <img src={pokeItem.imageUrl} alt="img" className={styles.img} />
        <DetailTexts currentPoke={pokeItem} />
      </div>
      {pokeItem!.id !== 898 && (
        <img
          className={styles.right}
          src={ARROW}
          onClick={onRightArrow}
          alt="오른쪽"
        ></img>
      )}
      {currentAbility && <AbilityModal />}
      {onBookModal && <AddBookModal onCloseBookModal={onCloseBookModal} />}
    </div>
  );
};

export default DesktopDetail;
