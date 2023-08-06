import { IPokemonList } from "../../../interface/IPokemonList";
import styles from "./MegaModal.module.scss";

type Props = {
  megaPoke: IPokemonList[];
  onChangeMega: (poke: IPokemonList) => void;
  onCloseModal: () => void;
};

const MegaModal = ({ megaPoke, onChangeMega, onCloseModal }: Props) => {
  // 메가진화 클릭 이벤트
  const onClick = (poke: IPokemonList) => {
    onChangeMega(poke);
    onCloseModal();
  };

  return (
    <div className={styles.megaModal}>
      <div className={styles.main}>
        <div className={styles.title}>어떤 형태의 진화를 보시겠습니까?</div>
        <div className={styles.line}></div>
        <div className={styles.btns}>
          <div onClick={() => onClick(megaPoke[0])}>x</div>
          <div onClick={() => onClick(megaPoke[1])}>y</div>
        </div>
      </div>
      <div className={styles.back} onClick={onCloseModal}></div>
    </div>
  );
};

export default MegaModal;
