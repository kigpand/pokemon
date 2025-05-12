import { useCallback } from "react";
import type { IPokemonList } from "interface/IPokemonList";
import { useDymax } from "hooks/useDymax";
import styled from "styled-components";
import TypeDif from "components/detail/TypeDif";
import EvolutionModal from "components/modal/EvolutionModal";
import { useModal } from "hooks/useModal";

type Props = {
  poke: IPokemonList;
  currentPoke: IPokemonList;
  megaPoke: IPokemonList | null | IPokemonList[];
  onChangeOrigin: () => void;
  onChangeMega: () => void;
  onChangeDymax: (dymax: string) => void;
};

const MobileDetailInfo = ({
  poke,
  currentPoke,
  megaPoke,
  onChangeOrigin,
  onChangeMega,
  onChangeDymax,
}: Props) => {
  const { dymax } = useDymax(currentPoke);
  const { isOpen, open, close } = useModal();

  const handleEvolutionModal = useCallback(
    (type: "origin" | "mega" | "dymax") => {
      if (type === "origin") {
        onChangeOrigin();
      }
      if (type === "mega") {
        onChangeMega();
      }
      if (type === "dymax") {
        onChangeDymax(dymax!);
      }
      close();
    },
    [dymax, onChangeDymax, onChangeMega, onChangeOrigin, close]
  );

  return (
    <InfoWrapper>
      {(megaPoke || dymax) && (
        <OtherFormStyled onClick={open}>다른 폼 보기</OtherFormStyled>
      )}
      <ImgStyled
        src={poke.imageUrl}
        alt={poke.name}
        referrerPolicy="no-referrer"
      ></ImgStyled>
      <TypeDifWrapper>
        <TypeDif poke={poke} />
      </TypeDifWrapper>
      <WHstatStyled>
        <div>키: {poke.height / 10}m</div>
        <div>몸무게: {poke.weight / 10}kg</div>
      </WHstatStyled>
      {isOpen && (
        <EvolutionModal
          megaPoke={megaPoke}
          dymax={dymax || undefined}
          handleEvolutionModal={handleEvolutionModal}
          handleCloseModal={close}
        />
      )}
    </InfoWrapper>
  );
};

export default MobileDetailInfo;

const InfoWrapper = styled.div`
  width: 100%;
  height: 130px;
  position: relative;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OtherFormStyled = styled.div`
  position: absolute;
  left: 10px;
  bottom: 10px;
  font-size: 12px;
  color: gray;
  display: flex;
  flex-direction: column;
  row-gap: 3px;
  font-weight: bold;
`;

const ImgStyled = styled.img`
  width: 130px;
  height: 100%;
`;

const TypeDifWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const WHstatStyled = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 10px;
  font-size: 10px;
  border: 1px solid lightgray;
  color: gray;
  border-radius: 8px;
`;
