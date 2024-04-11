import { useCallback, useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { IPokemonList } from "interface/IPokemonList";
import { useMega } from "hooks/useMega";
import { LAST_NUM } from "utils/convert";
import { convertOnePoke } from "utils/makeData";
import styled from "styled-components";
import list from "json/pokemonList.json";
import DesktopDetailHeader from "./DesktopDetailHeader";
import MegaModal from "components/modal/MegaModal";
import DesktopDetailBody from "./DesktopDetailBody";
import { useStorage } from "hooks/useStorage";

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
  const { setCurrentPokeStorage } = useStorage();

  const onChangeMegaPoke = useCallback(() => {
    if (!megaPoke) return;
    if (Array.isArray(megaPoke)) {
      setMegaModal(true);
    } else {
      if (pokeItem.name === megaPoke.name) return;
      setPokeItem(megaPoke);
    }
  }, [megaPoke, pokeItem.name]);

  const onChangeDymaxImg = useCallback(
    (img: string) => {
      if (pokeItem.imageUrl === img) return;
      setPokeItem({ ...currentPoke, imageUrl: img });
    },
    [currentPoke, pokeItem.imageUrl]
  );

  const onArrowClick = useCallback(
    (type: ARROWTYPE) => {
      let item = null;
      if (type === "LEFT") {
        item = list.find((item) => item.id === pokeItem!.id - 1);
      } else {
        item = list.find((item) => item.id === pokeItem!.id + 1);
      }
      if (!item) return;
      const pokemon = convertOnePoke(item);
      setCurrentPokeStorage(pokemon);
      onChangePoke(pokemon);
      setOriginPoke(pokemon);
      setPokeItem(pokemon);
    },
    [onChangePoke, pokeItem, setCurrentPokeStorage]
  );

  return (
    <DesktopWrapper>
      {pokeItem!.id !== 1 && <LeftArrow onClick={() => onArrowClick("LEFT")} />}
      <DesktopDetailHeader />
      <DesktopDetailBody
        currentPoke={pokeItem}
        megaPoke={megaPoke}
        onChangeOrigin={() => setPokeItem(originPoke)}
        onChangeMegaPoke={onChangeMegaPoke}
        onChangeDymaxImg={onChangeDymaxImg}
      />
      {pokeItem!.id !== LAST_NUM && (
        <RightArrow onClick={() => onArrowClick("RIGHT")} />
      )}
      {megaModal && Array.isArray(megaPoke) && (
        <MegaModal
          megaPoke={megaPoke}
          onChangeMega={(poke: IPokemonList) => {
            setPokeItem(poke);
          }}
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
