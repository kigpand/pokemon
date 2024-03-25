import { IPokemonList } from "interface/IPokemonList";
import { useEffect, useState } from "react";
import styled from "styled-components";
import TypeDifDetail from "./TypeDifDetail";
import VsModal from "components/modal/vsModal/VsModal";

type Props = {
  poke: IPokemonList;
};

const TypeDif = ({ poke }: Props) => {
  const [typeDetail, setTypeDetail] = useState<boolean>(false);
  const [vs, setVS] = useState<boolean>(false);

  useEffect(() => {
    setTypeDetail(false);
  }, [poke]);

  return (
    <DifWrapper>
      <div onClick={() => setTypeDetail(true)}>상성표 보기</div>
      <div onClick={() => setVS(true)}>비교</div>
      {typeDetail && (
        <TypeDifDetail
          typeArr={poke.types || []}
          onCloseType={() => setTypeDetail(false)}
        />
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
