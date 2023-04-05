import { IPokemonList } from "../../../interface/IPokemonList";
import { getLineColor } from "../../../utils/convert";
import styles from "./DesktopDetail.module.scss";
import DetailHeader from "./header/DetailHeader";
import DetailTexts from "./texts/DetailTexts";
import list from "../../../json/pokemonList.json";
import { convertOnePoke } from "../../../utils/makeData";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import AbilityModal from "../../abilityModal/AbilityModal";
import ARROW from "../../../imgs/left.png";

interface IDesktopDetail {
  currentPoke: IPokemonList;
}

const DesktopDetail = ({ currentPoke }: IDesktopDetail) => {
  const [pokeItem, setPokeItem] = useState<IPokemonList>(currentPoke);
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
    </div>
  );
};

export default DesktopDetail;
