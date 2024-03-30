import { IPokemonList } from "interface/IPokemonList";
import styled from "styled-components";
import ModalPortal from "ModalPortal";

type Props = {
  megaPoke: IPokemonList[];
  onChangeMega: (poke: IPokemonList) => void;
  onCloseModal: () => void;
};

const MegaModal = ({ megaPoke, onChangeMega, onCloseModal }: Props) => {
  // 메가진화 클릭 이벤트
  const onClick = (poke: IPokemonList) => {
    onChangeMega(poke);
    onCloseModal();
  };

  return (
    <ModalPortal
      handleCloseModal={onCloseModal}
      component={
        <MegaModalWrapper>
          <TitleStyled>어떤 형태의 진화를 보시겠습니까?</TitleStyled>
          <ButtonWrapper>
            <div onClick={() => onClick(megaPoke[0])}>x</div>
            <div onClick={() => onClick(megaPoke[1])}>y</div>
          </ButtonWrapper>
        </MegaModalWrapper>
      }
    />
  );
};

export default MegaModal;

const MegaModalWrapper = styled.article`
  width: 300px;
  height: 200px;
  background-color: white;
  border-radius: 8px;
`;

const TitleStyled = styled.div`
  width: 100%;
  padding: 10px;
  font-weight: bold;
  font-size: 14px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  border-top: 2px solid lightgray;
  justify-content: center;
  padding-top: 50px;
  gap: 30px;

  div {
    font-weight: bold;
    padding: 5px 10px;
    border-radius: 8px;

    &:hover {
      transform: scale(1.3);
      background-color: lightgray;
      cursor: pointer;
    }
  }
`;
