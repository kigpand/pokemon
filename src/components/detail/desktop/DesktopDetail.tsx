import { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import styled from "styled-components";
import { IPokemonList } from "../../../interface/IPokemonList";
import { useMega } from "../../../hooks/useMega";
import DetailBody from "./body/DetailBody";
import MegaModal from "../../modal/megaModal/MegaModal";
import { LAST_NUM } from "../../../utils/convert";
import { convertOnePoke } from "../../../utils/makeData";
import list from "../../../json/pokemonList.json";
import DetailHeader from "./DetailHeader";

type ARROWTYPE = "LEFT" | "RIGHT";

interface IDesktopDetail {
  currentPoke: IPokemonList;
  onChangePoke: (poke: IPokemonList) => void;
}

const DesktopDetail = ({ currentPoke, onChangePoke }: IDesktopDetail) => {
  const [pokeItem, setPokeItem] = useState<IPokemonList>(currentPoke);
  const [originPoke, setOriginPoke] = useState<IPokemonList>(currentPoke);
  const [megaModal, setMegaModal] = useState<boolean>(false);
  const { megaPoke } = useMega(pokeItem);

  const onChangeOrigin = () => {
    setPokeItem(originPoke);
  };

  const onChangeModalMega = (poke: IPokemonList) => {
    setPokeItem(poke);
  };

  const onChangeMegaPoke = () => {
    if (!megaPoke) return;
    if (Array.isArray(megaPoke)) {
      setMegaModal(true);
    } else {
      if (pokeItem.name === megaPoke.name) return;
      setPokeItem(megaPoke);
    }
  };

  const onChangeDymaxImg = (img: string) => {
    if (pokeItem.imageUrl === img) return;
    setPokeItem({ ...currentPoke, imageUrl: img });
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
    onChangePoke(pokemon);
    setOriginPoke(pokemon);
    setPokeItem(pokemon);
  };

  return (
    <DesktopWrapper>
      {pokeItem!.id !== 1 && <LeftArrow onClick={() => onArrowClick("LEFT")} />}
      <DetailHeader />
      <DetailBody
        currentPoke={pokeItem}
        megaPoke={megaPoke}
        onChangeOrigin={onChangeOrigin}
        onChangeMegaPoke={onChangeMegaPoke}
        onChangeDymaxImg={onChangeDymaxImg}
      />
      {pokeItem!.id !== LAST_NUM && (
        <RightArrow onClick={() => onArrowClick("RIGHT")} />
      )}
      {megaModal && Array.isArray(megaPoke) && (
        <MegaModal
          megaPoke={megaPoke}
          onChangeMega={onChangeModalMega}
          onCloseModal={() => setMegaModal(false)}
        />
      )}
    </DesktopWrapper>
  );
};

export default DesktopDetail;

const DesktopWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftArrow = styled(BsFillArrowLeftCircleFill)`
  width: 40px;
  height: 40px;
  cursor: pointer;

  &:hover {
    color: gray;
  }
`;

const RightArrow = styled(BsFillArrowRightCircleFill)`
  width: 40px;
  height: 40px;
  cursor: pointer;

  &:hover {
    color: gray;
  }
`;
