import styles from "./DetailAbility.module.scss";
import QUESTION from "../../../../imgs/question.png";
import { useDispatch } from "react-redux";
import { setCurrentAbility } from "../../../../reducers/datas";

type Props = {
  abilities: string[];
};

const DetailAbility = ({ abilities }: Props) => {
  const dispatch = useDispatch();

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
    </div>
  );
};

export default DetailAbility;
