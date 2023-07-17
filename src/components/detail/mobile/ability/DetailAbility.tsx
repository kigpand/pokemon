import { getColor } from "../../../../utils/convert";
import styles from "./DetailAbility.module.scss";
import QUESTION from "../../../../imgs/question.png";
import { useDispatch } from "react-redux";
import { setCurrentAbility } from "../../../../reducers/datas";

type Props = {
  types: string[];
  abilities: string[];
};

const DetailAbility = ({ types, abilities }: Props) => {
  const dispatch = useDispatch();

  function onAbility(ability: string) {
    dispatch(setCurrentAbility(ability));
  }

  return (
    <div className={styles.abilities}>
      <div
        className={styles.miniTitle}
        style={{ backgroundColor: getColor(types[0]) }}
      >
        특성
      </div>
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
    </div>
  );
};

export default DetailAbility;
