import styled from "styled-components";
import type { IPokemonList } from "interface/IPokemonList";
import { useDymax } from "hooks/useDymax";
import EvolutionModal from "components/modal/EvolutionModal";
import { useModal } from "hooks/useModal";

type Props = {
  currentPoke: IPokemonList;
  megaPoke?: IPokemonList | IPokemonList[] | null;
  onChangeOrigin: () => void;
  onChangeMegaPoke: () => void;
  onChangeDymaxImg: (img: string) => void;
};

const DesktopDetailBodyImg = (props: Props) => {
  const { dymax } = useDymax(props.currentPoke);
  const { isOpen, open, close } = useModal();

  const handleEvolutionModal = (type: "origin" | "mega" | "dymax") => {
    if (type === "origin") {
      props.onChangeOrigin();
    }
    if (type === "mega") {
      props.onChangeMegaPoke();
    }
    if (type === "dymax") {
      props.onChangeDymaxImg(dymax!);
    }
    close();
  };

  return (
    <ImgWrapper>
      <ImgStyled
        src={props.currentPoke.imageUrl}
        alt="img"
        referrerPolicy="no-referrer"
      />
      {(props.megaPoke || dymax) && (
        <ImgTextStyled onClick={open}>다른 폼 보기</ImgTextStyled>
      )}
      {isOpen && (
        <EvolutionModal
          dymax={dymax || undefined}
          megaPoke={props.megaPoke!}
          handleEvolutionModal={handleEvolutionModal}
          handleCloseModal={close}
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

const ImgTextStyled = styled.div`
  font-size: 14px;
  color: gray;
  display: flex;
  font-weight: bold;
  position: absolute;
  bottom: 0px;
  right: 0px;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.textColor};
    transform: scale(1.1);
  }
`;
