import { getColor } from "../../../../utils/convert";
import styles from "./DetailGenus.module.scss";

type Props = {
  types: string[];
  genus: string;
};

const DetailGenus = ({ types, genus }: Props) => {
  return (
    <div className={styles.genus}>
      <div
        className={styles.miniTitle}
        style={{ backgroundColor: getColor(types[0]) }}
      >
        분류
      </div>
      <div className={styles.mainContents}>
        <span>{genus}</span>
      </div>
    </div>
  );
};

export default DetailGenus;
