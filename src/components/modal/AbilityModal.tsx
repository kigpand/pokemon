import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/store";
import { IAbility } from "interface/IAbility";
import { setCurrentAbility } from "reducers/datas";
import { useEffect, useState } from "react";
import abililty from "json/ability.json";
import ModalPortal from "ModalPortal";
import styled from "styled-components";

const AbilityModal = () => {
  const { theme, currentAbility } = useSelector(
    (state: RootState) => state.datas
  );
  const dispatch = useDispatch();
  const [ability, setAbility] = useState<IAbility>();

  useEffect(() => {
    if (currentAbility !== null) {
      const abilites = abililty.find((abil) => abil.name === currentAbility);
      setAbility(abilites);
    }
  }, [currentAbility]);

  function onCloseAbility() {
    dispatch(setCurrentAbility(null));
  }

  return (
    <ModalPortal
      handleCloseModal={onCloseAbility}
      component={
        <AbilityWrapper theme={theme}>
          <TitleStyled>{ability?.name}</TitleStyled>
          <ContentWrapper>{ability?.text}</ContentWrapper>
        </AbilityWrapper>
      }
    />
  );
};

export default AbilityModal;

const AbilityWrapper = styled.article<{ theme: string }>`
  background-color: ${(props) => (props.theme === "dark" ? "black" : "white")};
  color: ${(props) => (props.theme === "dark" ? "white" : "black")};
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

const ContentWrapper = styled.div`
  border-top: 2px solid lightgray;
  width: 100%;
  font-size: 12px;
  padding: 10px 0;
  text-align: center;
`;
