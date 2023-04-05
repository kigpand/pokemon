import styles from "./DetailHeader.module.scss";
import LOGO from "../../../../imgs/logo2.png";

const DetailHeader = () => {
  return (
    <div className={styles.detailHeader}>
      <img src={LOGO} className={styles.logo} alt="logo"></img>
    </div>
  );
};

export default DetailHeader;
