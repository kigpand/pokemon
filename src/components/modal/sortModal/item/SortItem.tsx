import SortBtns from "../SortBtns";
import styles from "./SortItem.module.scss";

type Props = {
  title: string;
  list: any;
  onCloseBtn: () => void;
};

const SortItem = ({ title, list, onCloseBtn }: Props) => {
  return (
    <div className={styles.sortItem}>
      <div className={styles.title}>{title}</div>
      <SortBtns
        type={title === "타입" ? "type" : "gene"}
        list={list}
        onCloseBtn={onCloseBtn}
      />
    </div>
  );
};

export default SortItem;
