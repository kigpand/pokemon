import "../../../common/event.scss";
import styles from "./SortModal.module.scss";
import { typeList, geneList } from "./sort";
import pokeData from "../../../json/pokemonList.json";
import { useDispatch } from "react-redux";
import { resetCurrentList, setPokemonList } from "../../../reducers/pokemon";
import { convertPokeData } from "../../../utils/makeData";
import SortSelect from "./select/SortSelect";
import SortItem from "./item/SortItem";

interface ISortModal {
  closeSort: () => void;
}

const SortModal = ({ closeSort }: ISortModal) => {
  const dispatch = useDispatch();

  function onCloseBtn() {
    closeSort();
  }

  function onResetBtn() {
    const list = convertPokeData(pokeData);
    dispatch(setPokemonList(list));
    dispatch(resetCurrentList([]));
    onCloseBtn();
  }

  return (
    <div className={styles.sortModal}>
      <div className={styles.sortBtn} onClick={onCloseBtn}>
        닫기
      </div>
      <div className={styles.resetBtn} onClick={onResetBtn}>
        초기화
      </div>
      <SortSelect onCloseBtn={onCloseBtn} />
      <SortItem title="타입" list={typeList} onCloseBtn={onCloseBtn} />
      <SortItem title="세대" list={geneList} onCloseBtn={onCloseBtn} />
    </div>
  );
};

export default SortModal;
