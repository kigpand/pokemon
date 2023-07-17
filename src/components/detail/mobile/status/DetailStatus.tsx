import { getStatusBarColor } from "../../../../utils/convert";
import styles from "./DetailStatus.module.scss";

interface IStateItem {
  name: string;
  stat: string | number;
}

type Props = {
  stats: IStateItem[];
};

const DetailStatus = ({ stats }: Props) => {
  return (
    <div className={styles.status}>
      <div className={styles.mainContents}>
        {stats.map((stat: IStateItem, i: number) => {
          const backgroudColor = getStatusBarColor(stat.name);
          return (
            <div className={styles.statusItem} key={i}>
              <div
                className={styles.statusTitle}
                style={{ borderColor: backgroudColor }}
              >
                {stat.name}
              </div>
              <div
                className={styles.statusBar}
                style={{
                  width: `${stat.name === "총합" ? 200 : stat.stat}px`,
                }}
              >
                <div style={{ backgroundColor: backgroudColor }}>
                  {stat.stat}
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
