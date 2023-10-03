import styles from "./DetailListStat.module.scss";
import { baseStat } from "../../../../../../../utils/base";
import { IPokemonList } from "../../../../../../../interface/IPokemonList";
import { SortType } from "../../../../../../../typedef/SortType";
import {
  getStatKorea,
  getStatusBarColor,
} from "../../../../../../../utils/convert";

type Props = {
  items: IPokemonList;
};

export default function DetailListStat({ items }: Props) {
  return (
    <div className={styles.body}>
      {baseStat.map((item: SortType, i: number) => {
        return (
          <div
            className={styles.stat}
            style={{ backgroundColor: getStatusBarColor(item) }}
            key={i}
          >
            <div className={styles.item}>{getStatKorea(item)}</div>
            <div className={styles.value}>{items[item]}</div>
          </div>
        );
      })}
    </div>
  );
}
