import styled from "styled-components";
import ModalPortal from "ModalPortal";
import type { IPokemonList } from "interface/IPokemonList";

type Props = {
  dymax?: string;
  megaPoke: IPokemonList | null | IPokemonList[];
  handleEvolutionModal: (type: "origin" | "mega" | "dymax") => void;
  handleCloseModal: () => void;
};

export default function EvolutionModal({
  dymax,
  megaPoke,
  handleEvolutionModal,
  handleCloseModal,
}: Props) {
  return (
    <ModalPortal
      handleCloseModal={handleCloseModal}
      component={
        <EvolutionWrapper>
          <TitleStyled>어떤 진화를 선택하시겠습니까?</TitleStyled>
          <TextStyled>
            <div onClick={() => handleEvolutionModal("origin")}>
              원본 포켓몬 보기
            </div>
            {megaPoke && (
              <div onClick={() => handleEvolutionModal("mega")}>메가진화</div>
            )}
            {dymax && (
              <div onClick={() => handleEvolutionModal("dymax")}>
                거다이맥스
              </div>
            )}
          </TextStyled>
        </EvolutionWrapper>
      }
    />
  );
}

const EvolutionWrapper = styled.article<{ theme: string }>`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.theme.backgroundColor};
  border: 1px solid ${(props) => props.theme.textColor};
  border-radius: 8px;
`;

const TitleStyled = styled.header`
  width: 100%;
  padding: 10px 0px;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  border-bottom: 2px solid lightgray;
`;

const TextStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 50px;
  font-weight: bold;
  color: gray;

  div {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
      color: ${(props) => props.theme.textColor};
    }
  }
`;
