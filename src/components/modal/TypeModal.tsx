import types from "json/types.json";
import ModalPortal from "ModalPortal";
import styled from "styled-components";
import { getTypeIcon, getTypeKo } from "utils/convert";
import { useStorage } from "hooks/useStorage";

type Props = {
  onCloseModal: () => void;
};

export default function TypeModal({ onCloseModal }: Props) {
  const { setTypeStorage } = useStorage();

  function onType(type: string) {
    setTypeStorage(type);
    onCloseModal();
  }

  return (
    <ModalPortal
      handleCloseModal={onCloseModal}
      component={
        <TypeModalWrapper>
          <TitleStyled>타입을 선택해주세요</TitleStyled>
          <ContentWrapper>
            {types.map((item, i) => {
              return (
                <ImgWrapper key={i} onClick={() => onType(item.name)}>
                  <Front>{getTypeKo(item.name)}</Front>
                  <Icon src={getTypeIcon(item.name)} alt={item.name} />
                </ImgWrapper>
              );
            })}
          </ContentWrapper>
        </TypeModalWrapper>
      }
    />
  );
}

const TypeModalWrapper = styled.article<{ theme: string }>`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.textColor};
  border-radius: 8px;
`;

const TitleStyled = styled.div`
  width: 100%;
  padding: 20px 0 10px 10px;
  font-weight: bold;
`;

const ContentWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(3, 60px);
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

const Front = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  font-weight: bold;
  color: white;
  font-size: 18px;
  display: none;
  align-items: center;
  justify-content: center;
  animation: view 0.2s linear forwards;

  @keyframes view {
    0% {
      opacity: 0;
      transform: translateY(-5px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

const Icon = styled.img`
  width: 100%;
  height: 100%;
`;

const ImgWrapper = styled.div`
  cursor: pointer;
  height: 60px;
  position: relative;

  &:hover {
    ${Front} {
      display: flex;
    }
  }
`;
