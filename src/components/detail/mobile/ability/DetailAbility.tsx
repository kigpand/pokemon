import styles from "./DetailAbility.module.scss";
import QUESTION from "../../../../imgs/question.png";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentAbility } from "../../../../reducers/datas";
import AbilityModal from "../../../modal/abilityModal/AbilityModal";
import { RootState } from "../../../../store/store";

type Props = {
  abilities: string[];
};

const DetailAbility = ({ abilities }: Props) => {
  const dispatch = useDispatch();
  const currentAbility = useSelector(
    (state: RootState) => state.datas.currentAbility
  );

  function onAbility(ability: string) {
    dispatch(setCurrentAbility(ability));
  }

  return (
    <div className={styles.abilities}>
      <div className={styles.mainContents}>
        {abilities.map((abil, i) => {
          return (
            <span onClick={() => onAbility(abil)} key={i}>
              {abil}
              <img src={QUESTION} alt="question" />
            </span>
          );
        })}
      </div>
      {currentAbility && <AbilityModal />}
    </div>
  );
};

export default DetailAbility;
