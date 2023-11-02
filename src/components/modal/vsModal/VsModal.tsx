import { useState } from "react";
import styles from "./VsModal.module.scss";
import VsModalSearch from "./search/VsModalSearch";
import VsModalResult from "./result/VsModalResult";

export default function VsModal() {
  const [onSearch, setOnSearch] = useState<boolean>(true);
  return (
    <section className={styles.vsModal}>
      {onSearch ? <VsModalSearch /> : <VsModalResult />}
    </section>
  );
}
