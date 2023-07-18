import { getColor, getTypeIcon } from "../../../../utils/convert";
import styles from "./MobileTypeHeader.module.scss";

type Props = {
  name: string;
};

const MobileTypeHeader = ({ name }: Props) => {
  return (
    <div className={styles.header}>
      <img
        src={`${process.env.PUBLIC_URL}/${getTypeIcon(name)}`}
        alt="img"
        className={styles.icon}
      />
      <div className={styles.title} style={{ color: getColor(name) }}>
        {name}(타입)
      </div>
    </div>
  );
};

export default MobileTypeHeader;
