import { useDispatch, useSelector } from "react-redux";
import { IPokemonList } from "../../../../../interface/IPokemonList";
import { getStatusBarColor, getTypeIcon } from "../../../../../utils/convert";
import styles from "./TextItem.module.scss";
import { setCurrentAbility } from "../../../../../reducers/datas";
import { RootState } from "../../../../../store/store";
import AbilityModal from "../../../../modal/abilityModal/AbilityModal";

interface ITextItem {
  type: string;
  items: IPokemonList;
  onClick?: (item: any) => void;
}

function getRenderItem(items: IPokemonList, type: string, onClick: any) {
  switch (type) {
    case "타입":
      return (
        <div className={styles.body}>
          {items.types?.map((item: string, i: number) => {
            return (
              <div
                className={styles.type}
                key={i}
                onClick={() => onClick(item)}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/${getTypeIcon(item)}`}
                  alt="img"
                  className={styles.icon}
                />
              </div>
            );
          })}
        </div>
      );
    case "특성":
      return (
        <div className={styles.body}>
          {items.abilities?.map((item: string, i: number) => {
            return (
              <div className={styles.ability} key={i}>
                <div className={styles.item} onClick={() => onClick(item)}>
                  {item}
                </div>
              </div>
            );
          })}
        </div>
      );
    case "종족값":
      return (
        <div className={styles.body}>
          {items.stats?.map((item: any, i: number) => {
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
      );
    default:
      return <div className={styles.body}>{items.genus}</div>;
  }
}

const TextItem = ({ type, items, onClick }: ITextItem) => {
  const dispatch = useDispatch();
  const currentAbility = useSelector(
    (state: RootState) => state.datas.currentAbility
  );

  function onAbility(ability: string) {
    if (type === "특성") {
      dispatch(setCurrentAbility(ability));
    }
  }

  return (
    <div className={styles.textItem}>
      <div className={styles.title}>{type}</div>
      {type === "특성"
        ? getRenderItem(items, type, onAbility)
        : getRenderItem(items, type, onClick)}
      {currentAbility && <AbilityModal />}
    </div>
  );
};

export default TextItem;
