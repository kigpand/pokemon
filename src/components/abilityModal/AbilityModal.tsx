import { useDispatch, useSelector } from "react-redux";
import { setCurrentAbility } from "../../reducers/datas";
import { RootState } from "../../store/store";
import styles from "./AbilityModal.module.scss";
import { useEffect, useState } from "react";
import { IAbility } from "../../interface/IAbility";
import abililty from "../../json/ability.json";

const AbilityModal = () => {
  const currentAbility = useSelector(
    (state: RootState) => state.datas.currentAbility
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
    <div className={styles.abilityModal}>
      <div className={styles.main}>
        <div className={styles.title}>{ability?.name}</div>
        <div className={styles.line}></div>
        <div className={styles.content}>{ability?.text}</div>
      </div>
      <div className={styles.back} onClick={onCloseAbility}></div>
    </div>
  );
};

export default AbilityModal;
