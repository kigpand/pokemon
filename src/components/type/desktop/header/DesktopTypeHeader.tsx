import { getColor, getTypeIcon } from "../../../../utils/convert";
import styles from "./DesktopTypeHeader.module.scss";

type Props = {
  name: string;
};

const DesktopTypeHeader = ({ name }: Props) => {
  return (
    <header className={styles.header}>
      <img src={getTypeIcon(name)} alt="img" className={styles.icon} />
      <div className={styles.title} style={{ color: getColor(name) }}>
        {name}(타입)
      </div>
    </header>
  );
};

export default DesktopTypeHeader;
