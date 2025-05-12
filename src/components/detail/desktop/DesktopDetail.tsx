import { useCallback, useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import type { IPokemonList } from "interface/IPokemonList";
import { useMega } from "hooks/useMega";
import { LAST_NUM } from "utils/convert";
import { convertOnePoke } from "utils/makeData";
import styled from "styled-components";
import list from "json/pokemonList.json";
import DesktopDetailHeader from "./DesktopDetailHeader";
import MegaModal from "components/modal/MegaModal";
import DesktopDetailBody from "./DesktopDetailBody";
import { useStorage } from "hooks/useStorage";
import { useModal } from "hooks/useModal";

type ARROWTYPE = "LEFT" | "RIGHT";

const DesktopDetail = () => {
  const { setCurrentPokeStorage, getCurrentPokeStorage } = useStorage();
  // 현재 적용중인 포켓몬
  const [currentPoke, setCurrentPoke] = useState<IPokemonList | null>(
    getCurrentPokeStorage()
  );
  const [originPoke, setOriginPoke] = useState<IPokemonList | null>(
    currentPoke
  );
  const { isOpen, open, close } = useModal();
  const { megaPoke } = useMega(currentPoke);

  const onChangeMegaPoke = useCallback(() => {
    if (!megaPoke) return;
    if (Array.isArray(megaPoke)) {
      open();
    } else {
      if (currentPoke?.name === megaPoke.name) return;
      setCurrentPoke(megaPoke);
    }
  }, [megaPoke, open, currentPoke?.name]);

  const onChangeDymaxImg = useCallback(
    (img: string) => {
      if (currentPoke?.imageUrl === img || !currentPoke) return;
      setCurrentPoke({ ...currentPoke, imageUrl: img });
    },
    [currentPoke, setCurrentPoke]
  );

  const onArrowClick = useCallback(
    (type: ARROWTYPE) => {
      let item = null;
      if (type === "LEFT") {
        item = list.find((item) => item.id === currentPoke!.id - 1);
      } else {
        item = list.find((item) => item.id === currentPoke!.id + 1);
      }
      if (!item) return;
      const pokemon = convertOnePoke(item);
      setCurrentPokeStorage(pokemon);
      setCurrentPoke(pokemon);
      setOriginPoke(pokemon);
    },
    [setCurrentPoke, currentPoke, setCurrentPokeStorage]
  );

  if (!currentPoke) return null;

  return (
    <DesktopWrapper>
      {currentPoke!.id !== 1 && (
        <LeftArrow onClick={() => onArrowClick("LEFT")} />
      )}
      <DesktopDetailHeader />
      <DesktopDetailBody
        currentPoke={currentPoke}
        megaPoke={megaPoke}
        onChangeOrigin={() => setCurrentPoke(originPoke)}
        onChangeMegaPoke={onChangeMegaPoke}
        onChangeDymaxImg={onChangeDymaxImg}
      />
      {currentPoke!.id !== LAST_NUM && (
        <RightArrow onClick={() => onArrowClick("RIGHT")} />
      )}
      {isOpen && Array.isArray(megaPoke) && (
        <MegaModal
          megaPoke={megaPoke}
          onChangeMega={(poke: IPokemonList) => {
            setCurrentPoke(poke);
          }}
          onCloseModal={close}
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
