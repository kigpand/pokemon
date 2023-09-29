import { IPokemonList } from "../../../../interface/IPokemonList";
import { SortType } from "../../../../typedef/SortType";
import { baseStat } from "../../../../utils/base";
import { getStatKorea, getStatusBarColor } from "../../../../utils/convert";
import styles from "./DetailStatus.module.scss";

type Props = {
  poke: IPokemonList;
};

const DetailStatus = ({ poke }: Props) => {
  return (
    <div className={styles.status}>
      <div className={styles.mainContents}>
        {baseStat.map((item: SortType, i: number) => {
          return (
            <div className={styles.statusItem} key={i}>
              <div
                className={styles.statusTitle}
                style={{ borderColor: getStatusBarColor(item) }}
              >
                {getStatKorea(item)}
              </div>
              <div
                className={styles.statusBar}
                style={{
                  width: `${item === "allStat" ? 200 : poke[item]}px`,
                }}
              >
                <div style={{ backgroundColor: getStatusBarColor(item) }}>
                  {poke[item]}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailStatus;
