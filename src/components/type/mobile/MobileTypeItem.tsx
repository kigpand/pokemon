import { getColor, getTypeIcon } from "../../../utils/convert";
import styles from "./MobileTypeItem.module.scss";

interface IMobileTypeItem {
  arr: string[];
  title: string;
  type: string;
  onChangeType: any;
}

const MobileTypeItem = ({
  arr,
  title,
  type,
  onChangeType,
}: IMobileTypeItem) => {
  return (
    <div className={styles.mobileTypeItem}>
      <div className={styles.title} style={{ backgroundColor: getColor(type) }}>
        {title}
      </div>
      <div className={styles.items} style={{ borderColor: getColor(type) }}>
        {arr[0] &&
          arr.map((item: string, i: number) => {
            return (
              <img
                src={`${process.env.PUBLIC_URL}/${getTypeIcon(item)}`}
                onClick={() => onChangeType(item)}
                alt="img"
                className={styles.icon}
                style={{ borderColor: getColor(item) }}
                key={i}
              />
            );
          })}
      </div>
    </div>
  );
};

export default MobileTypeItem;
