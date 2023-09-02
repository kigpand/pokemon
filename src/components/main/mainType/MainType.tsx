import { useState } from "react";
import styles from "./MainType.module.scss";
import TypeModal from "../../modal/typeModal/TypeModal";

export default function MainType() {
  const [view, setView] = useState<boolean>(false);

  return (
    <div className={styles.mainType}>
      <button className={styles.btn} onClick={() => setView(true)}>
        타입보기
      </button>
      {view && <TypeModal onCloseModal={() => setView(false)} />}
    </div>
  );
}
