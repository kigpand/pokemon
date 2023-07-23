import { useDispatch, useSelector } from "react-redux";
import styles from "./AbilityList.module.scss";
import { RootState } from "../../../../../store/store";
import { setCurrentAbility } from "../../../../../reducers/datas";
import { IPokemonList } from "../../../../../interface/IPokemonList";
import AbilityModal from "../../../../modal/abilityModal/AbilityModal";

type Props = {
  type: string;
  items: IPokemonList;
};

const AbilityList = ({ type, items }: Props) => {
  const dispatch = useDispatch();
  const currentAbility = useSelector(
    (state: RootState) => state.datas.currentAbility
  );

  function onAbility(ability: string) {
    dispatch(setCurrentAbility(ability));
  }

  return (
    <div className={styles.abilityList}>
      <div className={styles.title}>{type}</div>
      <div className={styles.body}>
        {items.abilities?.map((item: string, i: number) => {
          return (
            <div className={styles.ability} key={i}>
              <div className={styles.item} onClick={() => onAbility(item)}>
                {item}
              </div>
            </div>
          );
        })}
      </div>
      {currentAbility && <AbilityModal />}
    </div>
  );
};

export default AbilityList;
