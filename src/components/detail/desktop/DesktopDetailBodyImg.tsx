import styled from "styled-components";
import { useCallback, useState } from "react";
import { IPokemonList } from "interface/IPokemonList";
import { useDymax } from "hooks/useDymax";
import EvolutionModal from "components/modal/EvolutionModal";
import { useSelector } from "react-redux";
import { RootState } from "store/store";

type Props = {
  currentPoke: IPokemonList;
  megaPoke?: IPokemonList | IPokemonList[] | null;
  onChangeOrigin: () => void;
  onChangeMegaPoke: () => void;
  onChangeDymaxImg: (img: string) => void;
};

const DesktopDetailBodyImg = (props: Props) => {
  const { dymax } = useDymax(props.currentPoke);
  const theme = useSelector((state: RootState) => state.datas.theme);
  const [modal, setModal] = useState<boolean>(false);

  const handleEvolutionModal = useCallback(
    (type: "origin" | "mega" | "dymax") => {
      if (type === "origin") {
        props.onChangeOrigin();
      }
      if (type === "mega") {
        props.onChangeMegaPoke();
      }
      if (type === "dymax") {
        props.onChangeDymaxImg(dymax!);
      }
      setModal(false);
    },
    [dymax, props]
  );

  return (
    <ImgWrapper>
      <ImgStyled
        src={props.currentPoke.imageUrl}
        alt="img"
        referrerPolicy="no-referrer"
      />
      {(props.megaPoke || dymax) && (
        <ImgTextStyled theme={theme} onClick={() => setModal(true)}>
          다른 폼 보기
        </ImgTextStyled>
      )}
      {modal && (
        <EvolutionModal
          dymax={dymax || undefined}
          megaPoke={props.megaPoke!}
          handleEvolutionModal={handleEvolutionModal}
          handleCloseModal={() => setModal(false)}
        />
      )}
    </ImgWrapper>
  );
};

export default DesktopDetailBodyImg;

const ImgWrapper = styled.div`
  height: 100%;
  position: relative;
`;

const ImgStyled = styled.img`
  width: 400px;
  height: 100%;
`;

const ImgTextStyled = styled.div<{ theme: string }>`
  font-size: 14px;
  color: gray;
  display: flex;
  font-weight: bold;
  position: absolute;
  bottom: 0px;
  right: 0px;
  cursor: pointer;

  &:hover {
    color: ${(props) => (props.theme === "dark" ? "white" : "black")};
    transform: scale(1.1);
  }
`;
