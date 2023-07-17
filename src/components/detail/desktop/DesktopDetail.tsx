import { IPokemonList } from "../../../interface/IPokemonList";
import { LAST_NUM } from "../../../utils/convert";
import styles from "./DesktopDetail.module.scss";
import DetailHeader from "./header/DetailHeader";
import DetailBody from "./texts/DetailBody";
import list from "../../../json/pokemonList.json";
import { convertOnePoke } from "../../../utils/makeData";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import AbilityModal from "../../modal/abilityModal/AbilityModal";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

type ARROWTYPE = "LEFT" | "RIGHT";

interface IDesktopDetail {
  currentPoke: IPokemonList;
}

const DesktopDetail = ({ currentPoke }: IDesktopDetail) => {
  const [pokeItem, setPokeItem] = useState<IPokemonList>(currentPoke);
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

  return (
    <div className={styles.desktopDetail}>
      {pokeItem!.id !== 1 && (
        <BsFillArrowLeftCircleFill
          className={styles.arrow}
          onClick={() => onArrowClick("LEFT")}
        />
      )}
      <DetailHeader />
      <DetailBody currentPoke={pokeItem} />
      {pokeItem!.id !== LAST_NUM && (
        <BsFillArrowRightCircleFill
          className={styles.arrow}
          onClick={() => onArrowClick("RIGHT")}
        />
      )}
      {currentAbility && <AbilityModal />}
    </div>
  );
};

export default DesktopDetail;
