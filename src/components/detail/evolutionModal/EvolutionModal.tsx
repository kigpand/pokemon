import { IPokemonList } from "../../../interface/IPokemonList";
import styles from "./EvolutionModal.module.scss";

type Props = {
  dymax?: string;
  megaPoke: IPokemonList | null | IPokemonList[];
  handleEvolutionModal: (type: "origin" | "mega" | "dymax") => void;
};

export default function EvolutionModal({
  dymax,
  megaPoke,
  handleEvolutionModal,
}: Props) {
  return (
    <div className={styles.evolutionModal}>
      <div className={styles.main}>
        <div className={styles.title}>어떤 진화를 선택하시겠습니까?</div>
        <div className={styles.line}></div>
        <div className={styles.texts}>
          <div onClick={() => handleEvolutionModal("origin")}>
            원본 포켓몬 보기
          </div>
          {megaPoke && (
            <div onClick={() => handleEvolutionModal("mega")}>메가진화</div>
          )}
          {dymax && (
            <div onClick={() => handleEvolutionModal("dymax")}>거다이맥스</div>
          )}
        </div>
      </div>
    </div>
  );
}
