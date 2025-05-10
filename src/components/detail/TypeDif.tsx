import type { IPokemonList } from "interface/IPokemonList";
import { useEffect, useState } from "react";
import styled from "styled-components";
import TypeDifDetail from "./TypeDifDetail";
import VsModal from "components/modal/VsModal";
import { useModal } from "hooks/useModal";

type Props = {
  poke: IPokemonList;
};

const TypeDif = ({ poke }: Props) => {
  const { isOpen, open, close } = useModal();
  const [vs, setVS] = useState<boolean>(false);

  useEffect(() => {
    close();
  }, [poke, close]);

  return (
    <DifWrapper>
      <div onClick={open}>상성표 보기</div>
      <div onClick={() => setVS(true)}>비교</div>
      {isOpen && (
        <TypeDifDetail typeArr={poke.types || []} onCloseType={close} />
      )}
      {vs && <VsModal currentPoke={poke} closeModal={() => setVS(false)} />}
    </DifWrapper>
  );
};

export default TypeDif;

const DifWrapper = styled.div`
  color: gray;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  gap: 8px;

  div {
    cursor: pointer;
  }
`;
