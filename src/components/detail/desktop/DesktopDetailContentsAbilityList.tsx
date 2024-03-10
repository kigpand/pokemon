import { useDispatch, useSelector } from "react-redux";
import { IPokemonList } from "interface/IPokemonList";
import { RootState } from "store/store";
import { setCurrentAbility } from "reducers/datas";
import AbilityModal from "components/modal/abilityModal/AbilityModal";
import styled from "styled-components";

type Props = {
  type: string;
  items: IPokemonList;
};

const DesktopDetailContentsAbilityList = ({ type, items }: Props) => {
  const dispatch = useDispatch();
  const currentAbility = useSelector(
    (state: RootState) => state.datas.currentAbility
  );

  function onAbility(ability: string) {
    dispatch(setCurrentAbility(ability));
  }

  return (
    <AbilityListStyled>
      <div className="title">{type}</div>
      <AbilityListBodyStyled>
        {items.abilities?.map((item: string, i: number) => {
          return (
            <AbilityListBodyStyled>
              <div className="item" onClick={() => onAbility(item)}>
                {item}
              </div>
            </AbilityListBodyStyled>
          );
        })}
      </AbilityListBodyStyled>
      {currentAbility && <AbilityModal />}
    </AbilityListStyled>
  );
};

export default DesktopDetailContentsAbilityList;

const AbilityListStyled = styled.div`
  padding: 5px;
  border: 1px solid lightgray;
  margin-right: 10px;
  margin-top: 10px;

  .title {
    text-align: center;
    font-weight: 700;
    margin-bottom: 10px;
    color: gray;
  }
`;

const AbilityListBodyStyled = styled.div`
  display: flex;
  padding: 5px;
  font-weight: 700;

  .ability {
    display: flex;
    position: relative;

    .item {
      width: 60px;
      text-align: center;

      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
`;
