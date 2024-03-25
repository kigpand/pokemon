import { useDispatch, useSelector } from "react-redux";
import { MobileDetailContents } from "styles/CommonStyled";
import { setCurrentAbility } from "reducers/datas";
import { RootState } from "store/store";
import QUESTION from "imgs/question.png";
import styled from "styled-components";
import AbilityModal from "components/modal/abilityModal/AbilityModal";

type Props = {
  abilities: string[];
};

const MobileDetailAbility = ({ abilities }: Props) => {
  const dispatch = useDispatch();
  const currentAbility = useSelector(
    (state: RootState) => state.datas.currentAbility
  );

  function onAbility(ability: string) {
    dispatch(setCurrentAbility(ability));
  }

  return (
    <>
      <AbilityWrapper>
        {abilities.map((abil, i) => {
          return (
            <span onClick={() => onAbility(abil)} key={i}>
              {abil}
              <img src={QUESTION} alt="question" />
            </span>
          );
        })}
      </AbilityWrapper>
      {currentAbility && <AbilityModal />}
    </>
  );
};

export default MobileDetailAbility;

const AbilityWrapper = styled(MobileDetailContents)`
  span {
    margin-right: 1rem;
    font-weight: bold;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }

    img {
      width: 15px;
      height: 15px;
    }
  }
`;
