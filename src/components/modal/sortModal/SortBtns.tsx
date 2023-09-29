import {
  getColor,
  getTypeConvertData,
  getTypeKo,
} from "../../../utils/convert";
import styles from "./SortBtns.module.scss";
import pokeData from "../../../json/pokemonList.json";
import { convertPokeData } from "../../../utils/makeData";
import { useDispatch } from "react-redux";
import { resetCurrentList, setPokemonList } from "../../../reducers/pokemon";
import { cloneDeep } from "lodash";
import { IPokemonList } from "../../../interface/IPokemonList";
import { SortType } from "../../../typedef/SortType";

interface ISortBtns {
  type: string;
  list?: string[];
  onCloseBtn: () => void;
}
const SortBtns = ({ type, list, onCloseBtn }: ISortBtns) => {
  const dispatch = useDispatch();

  function onSort(sortData: string, type: string) {
    let filteredData = [];
    if (type === "type") {
      filteredData = pokeData.filter((poke) => {
        const result = getTypeConvertData(poke.pokeTypes)?.find(
          (type) => type === sortData
        );
        return result ? true : false;
      });
    } else {
      filteredData = pokeData.filter((poke) => poke.generate === sortData);
    }

    if (filteredData?.length > 0) {
      const setting = convertPokeData(filteredData);
      dispatch(setPokemonList(setting));
      dispatch(resetCurrentList([]));
    }

    onCloseBtn();
  }

  function onSortBy(type: SortType) {
    const list: IPokemonList[] = convertPokeData(cloneDeep(pokeData));
    let filteredData: IPokemonList[] = list.sort((a, b) => b[type] - a[type]);

    if (filteredData?.length > 0) {
      dispatch(setPokemonList(filteredData));
      dispatch(resetCurrentList([]));
    }

    onCloseBtn();
  }

  function onReverseSortBy(type: SortType) {
    const list: IPokemonList[] = convertPokeData(cloneDeep(pokeData));
    const filteredData: IPokemonList[] = list.sort((a, b) => a[type] - b[type]);

    if (filteredData?.length > 0) {
      dispatch(setPokemonList(filteredData));
      dispatch(resetCurrentList([]));
    }

    onCloseBtn();
  }

  return (
    <div className={styles.sortBtns}>
      {type === "type" &&
        list &&
        list.map((type: string, i: number) => {
          return (
            <div
              key={i}
              style={{ borderColor: getColor(type), color: getColor(type) }}
              onClick={() => onSort(type, "type")}
            >
              {getTypeKo(type)}
            </div>
          );
        })}
      {type === "gene" &&
        list &&
        list.map((gene: string, i: number) => {
          return (
            <div
              key={i}
              className={styles.gene}
              onClick={() => onSort(gene, "gene")}
            >
              {gene}
            </div>
          );
        })}
      {!list && (
        <div className={styles.item} onClick={() => onSortBy(type as SortType)}>
          높은 순
        </div>
      )}
      {!list && (
        <div
          className={styles.item}
          onClick={() => onReverseSortBy(type as SortType)}
        >
          낮은 순
        </div>
      )}
    </div>
  );
};

export default SortBtns;
