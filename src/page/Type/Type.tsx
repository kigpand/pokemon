import DesktopType from "../../components/type/desktop/DesktopType";
import MobileType from "../../components/type/mobile/MobileType";
import { useWindowSize } from "../../hooks/useWindowSize";
import { MOBILE_SIZE } from "../../utils/convert";
import styles from "./Type.module.scss";

const Type = () => {
  const windowSize = useWindowSize();
  return (
    <div className={styles.type}>
      {windowSize >= MOBILE_SIZE ? <DesktopType /> : <MobileType />}
    </div>
  );
};

export default Type;
