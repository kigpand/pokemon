import { getColor, getTypeIcon } from "../../utils/convert";
import styles from "./TypeItem.module.scss";

interface ITypeItem {
  arr: string[];
  title: string;
  type: string;
  onChangeType: any;
}

const TypeItem = ({ arr, title, type, onChangeType }: ITypeItem) => {
  return (
    <div className={styles.typeItem}>
      <div className={styles.title} style={{ backgroundColor: getColor(type) }}>
        {title}
      </div>
      <div className={styles.items} style={{ borderColor: getColor(type) }}>
        {arr[0] &&
          arr.map((item: string, i: number) => {
            return (
              <img
                src={getTypeIcon(item)}
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

export default TypeItem;
