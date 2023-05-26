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

  function onSortBy(type: string) {
    const list: IPokemonList[] = convertPokeData(cloneDeep(pokeData));
    let filteredData: IPokemonList[] = [];
    switch (type) {
      case "id":
        filteredData = list.sort((a, b) => b.id - a.id);
        break;
      case "weight":
        filteredData = list.sort((a, b) => b.weight - a.weight);
        break;
      case "height":
        filteredData = list.sort((a, b) => b.height - a.height);
        break;
      case "hp":
        filteredData = list.sort((a, b) => b.stats[0].stat - a.stats[0].stat);
        break;
      case "공격":
        filteredData = list.sort((a, b) => b.stats[1].stat - a.stats[1].stat);
        break;
      case "방어":
        filteredData = list.sort((a, b) => b.stats[2].stat - a.stats[2].stat);
        break;
      case "특수공격":
        filteredData = list.sort((a, b) => b.stats[3].stat - a.stats[3].stat);
        break;
      case "특수방어":
        filteredData = list.sort((a, b) => b.stats[4].stat - a.stats[4].stat);
        break;
      case "스피드":
        filteredData = list.sort((a, b) => b.stats[5].stat - a.stats[5].stat);
        break;
      case "총합":
        filteredData = list.sort((a, b) => b.stats[6].stat - a.stats[6].stat);
        break;
      default:
        break;
    }

    if (filteredData?.length > 0) {
      dispatch(setPokemonList(filteredData));
      dispatch(resetCurrentList([]));
    }

    onCloseBtn();
  }

  function onReverseSortBy(type: string) {
    const list: IPokemonList[] = convertPokeData(cloneDeep(pokeData));
    let filteredData: IPokemonList[] = [];
    switch (type) {
      case "id":
        filteredData = list.sort((a, b) => a.id - b.id);
        break;
      case "weight":
        filteredData = list.sort((a, b) => a.weight - b.weight);
        break;
      case "height":
        filteredData = list.sort((a, b) => a.height - b.height);
        break;
      case "hp":
        filteredData = list.sort((a, b) => a.stats[0].stat - b.stats[0].stat);
        break;
      case "공격":
        filteredData = list.sort((a, b) => a.stats[1].stat - b.stats[1].stat);
        break;
      case "방어":
        filteredData = list.sort((a, b) => a.stats[2].stat - b.stats[2].stat);
        break;
      case "특수공격":
        filteredData = list.sort((a, b) => a.stats[3].stat - b.stats[3].stat);
        break;
      case "특수방어":
        filteredData = list.sort((a, b) => a.stats[4].stat - b.stats[4].stat);
        break;
      case "스피드":
        filteredData = list.sort((a, b) => a.stats[5].stat - b.stats[5].stat);
        break;
      case "총합":
        filteredData = list.sort((a, b) => a.stats[6].stat - b.stats[6].stat);
        break;
      default:
        break;
    }

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
              style={{ backgroundColor: getColor(type) }}
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
        <div className={styles.item} onClick={() => onSortBy(type)}>
          높은 순
        </div>
      )}
      {!list && (
        <div className={styles.item} onClick={() => onReverseSortBy(type)}>
          낮은 순
        </div>
      )}
    </div>
  );
};

export default SortBtns;
