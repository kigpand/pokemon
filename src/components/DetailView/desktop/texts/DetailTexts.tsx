import { useDispatch } from "react-redux";
import { IPokemonList } from "../../../../interface/IPokemonList";
import {
  getStatusBarColor,
  getTypeIcon,
  getTypeKo,
} from "../../../../utils/convert";
import styles from "./DetailTexts.module.scss";
import { setCurrentAbility } from "../../../../reducers/datas";

interface IDetailTexts {
  currentPoke: IPokemonList;
}

const DetailTexts = ({ currentPoke }: IDetailTexts) => {
  const dispatch = useDispatch();

  function onAbility(ability: string) {
    dispatch(setCurrentAbility(ability));
  }

  return (
    <div className={styles.detailTexts}>
      <div className={styles.header}>
        <div className={styles.num}>No.{currentPoke!.id}</div>
        <div className={styles.name}>{currentPoke!.name}</div>
        <div className={styles.generate}>{currentPoke!.generate}</div>
      </div>
      <div className={styles.lists}>
        <div className={styles.list}>
          <div className={styles.title}>분류</div>
          <div className={styles.body}>{currentPoke!.genus}</div>
        </div>
        <div className={styles.list}>
          <div className={styles.title}>타입</div>
          <div className={styles.body}>
            {currentPoke!.types?.map((item: string, i: number) => {
              return (
                <div className={styles.type} key={i}>
                  <img
                    src={`${process.env.PUBLIC_URL}/${getTypeIcon(item)}`}
                    alt="img"
                    className={styles.icon}
                  />
                  <div className={styles.item}>{getTypeKo(item)}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.list}>
          <div className={styles.title}>특성</div>
          <div className={styles.body}>
            {currentPoke!.abilities?.map((item: string, i: number) => {
              return (
                <div className={styles.ability} key={i}>
                  <div className={styles.item} onClick={() => onAbility(item)}>
                    {item}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.list}>
          <div className={styles.title}>종족값</div>
          <div className={styles.body}>
            {currentPoke!.stats?.map((item: any, i: number) => {
              return (
                <div
                  className={styles.stat}
                  style={{ backgroundColor: getStatusBarColor(item.name) }}
                  key={i}
                >
                  <div className={styles.item}>{item.name}</div>
                  <div className={styles.value}>{item.stat}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailTexts;
