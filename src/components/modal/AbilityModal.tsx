import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/store";
import { setCurrentAbility } from "reducers/datas";
import abililty from "json/ability.json";
import ModalPortal from "ModalPortal";
import styled from "styled-components";

const AbilityModal = () => {
  const { theme, currentAbility } = useSelector(
    (state: RootState) => state.datas
  );
  const dispatch = useDispatch();

  return (
    <ModalPortal
      handleCloseModal={() => dispatch(setCurrentAbility(null))}
      component={
        <AbilityWrapper theme={theme}>
          <TitleStyled>
            {abililty.find((abil) => abil.name === currentAbility)?.name}
          </TitleStyled>
          <ContentWrapper>
            {abililty.find((abil) => abil.name === currentAbility)?.text}
          </ContentWrapper>
        </AbilityWrapper>
      }
    />
  );
};

export default AbilityModal;

const AbilityWrapper = styled.article<{ theme: string }>`
  background-color: ${(props) => (props.theme === "dark" ? "black" : "white")};
  border: 1px solid ${(props) => (props.theme === "dark" ? "white" : "dark")};
  color: ${(props) => (props.theme === "dark" ? "white" : "black")};
  width: 300px;
  height: 200px;
  border-radius: 8px;
`;

const TitleStyled = styled.div`
  width: 100%;
  padding: 10px;
  font-weight: bold;
  font-size: 14px;
`;

const ContentWrapper = styled.div`
  border-top: 2px solid lightgray;
  width: 100%;
  font-size: 12px;
  padding: 10px 0;
  text-align: center;
`;
