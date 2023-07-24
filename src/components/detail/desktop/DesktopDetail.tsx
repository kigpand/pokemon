import { IPokemonList } from "../../../interface/IPokemonList";
import { LAST_NUM } from "../../../utils/convert";
import styles from "./DesktopDetail.module.scss";
import DetailHeader from "./header/DetailHeader";
import DetailBody from "./body/DetailBody";
import list from "../../../json/pokemonList.json";
import { convertOnePoke } from "../../../utils/makeData";
import { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useMega } from "../../../hooks/useMega";

type ARROWTYPE = "LEFT" | "RIGHT";

interface IDesktopDetail {
  currentPoke: IPokemonList;
}

const DesktopDetail = ({ currentPoke }: IDesktopDetail) => {
  const [pokeItem, setPokeItem] = useState<IPokemonList>(currentPoke);
  const { megaPoke } = useMega(pokeItem);

  const onChangeMegaPoke = () => {
    if (!megaPoke) return;
    setPokeItem(megaPoke);
  };

  const onChangeDymaxImg = (img: string) => {
    setPokeItem({ ...pokeItem, imageUrl: img });
  };

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
      <DetailBody
        currentPoke={pokeItem}
        megaPoke={megaPoke}
        onChangeMegaPoke={onChangeMegaPoke}
        onChangeDymaxImg={onChangeDymaxImg}
      />
      {pokeItem!.id !== LAST_NUM && (
        <BsFillArrowRightCircleFill
          className={styles.arrow}
          onClick={() => onArrowClick("RIGHT")}
        />
      )}
    </div>
  );
};

export default DesktopDetail;
