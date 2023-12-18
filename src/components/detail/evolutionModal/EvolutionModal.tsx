import { useDymax } from "../../../hooks/useDymax";
import { IPokemonList } from "../../../interface/IPokemonList";
import styles from "./EvolutionModal.module.scss";

type Props = {
  currentPoke: IPokemonList;
  originPoke: IPokemonList;
  megaPoke: IPokemonList | null | IPokemonList[];
  onChangeOrigin: () => void;
  onChangeMegaPoke: () => void;
  onChangeDymaxImg: (img: string) => void;
};

export default function EvolutionModal({
  currentPoke,
  originPoke,
  megaPoke,
  onChangeOrigin,
  onChangeMegaPoke,
  onChangeDymaxImg,
}: Props) {
  const { dymax } = useDymax(currentPoke);
  return (
    <div className={styles.evolutionModal}>
      <div className={styles.main}>
        <div className={styles.title}>어떤 진화를 선택하시겠습니까?</div>
        <div className={styles.line}></div>
      </div>
    </div>
  );
}
