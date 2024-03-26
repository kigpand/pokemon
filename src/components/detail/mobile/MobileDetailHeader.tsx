import { AiOutlineCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IPokemonList } from "interface/IPokemonList";
import { getColor } from "utils/convert";
import styled from "styled-components";
import BookComponent from "components/detail/BookComponent";
import AddBookModal from "components/modal/AddBookModal";

type Props = {
  poke: IPokemonList;
};

const MobileDetailHeader = ({ poke }: Props) => {
  const [onBookModal, setOnBookModal] = useState<Boolean>(false);
  const nav = useNavigate();

  function onCloseBtn() {
    sessionStorage.removeItem("currentPoke");
    nav(-1);
  }

  function onCloseBookModal() {
    setOnBookModal(false);
  }

  return (
    <HeaderWrapper>
      <CloseButton color={getColor(poke?.types![0])} onClick={onCloseBtn} />
      <NumberWrapper>
        <span>
          No.{poke?.id} {poke.name}
        </span>
        <BookComponent poke={poke} />
      </NumberWrapper>
      <GeneragteWrapper color={getColor(poke?.types![0])}>
        {poke.generate}
      </GeneragteWrapper>
      {onBookModal && <AddBookModal onCloseBookModal={onCloseBookModal} />}
    </HeaderWrapper>
  );
};

export default MobileDetailHeader;

const HeaderWrapper = styled.header`
  width: 100%;
`;

const NumberWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  padding-left: 10px;
  font-weight: bold;
  font-size: 20px;
`;

type ColorProps = {
  color: string;
};

const GeneragteWrapper = styled.div<ColorProps>`
  border-top: 1px solid ${(props) => props.color};
  border-bottom: 1px solid ${(props) => props.color};
  font-weight: bold;
  padding: 5px 0;
  padding-left: 10px;
`;

const CloseButton = styled(AiOutlineCloseCircle)<ColorProps>`
  font-size: 25px;
  position: absolute;
  top: 10px;
  right: 10px;
  font-weight: bold;
  border-radius: 50%;
  color: ${(props) => props.color};

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
