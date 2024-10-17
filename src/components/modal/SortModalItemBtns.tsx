import pokeData from "json/pokemonList.json";
import { useDispatch } from "react-redux";
import { cloneDeep } from "lodash";
import styled from "styled-components";
import { getColor, getTypeConvertData, getTypeKo } from "utils/convert";
import { convertPokeData } from "utils/makeData";
import { resetCurrentList, setPokemonList } from "reducers/pokemon";
import { SortType } from "typedef/SortType";
import { IPokemonList } from "interface/IPokemonList";
import { useCallback } from "react";

interface ISortBtns {
  type: string;
  list?: string[];
  onCloseBtn: () => void;
}
const SortModalItemBtns = ({ type, list, onCloseBtn }: ISortBtns) => {
  const dispatch = useDispatch();

  const onSort = useCallback(
    (sortData: string, type: string) => {
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
    },
    [dispatch, onCloseBtn]
  );

  const onSortBy = useCallback(
    (type: SortType) => {
      const list: IPokemonList[] = convertPokeData(cloneDeep(pokeData));
      let filteredData: IPokemonList[] = list.sort((a, b) => b[type] - a[type]);

      if (filteredData?.length > 0) {
        dispatch(setPokemonList(filteredData));
        dispatch(resetCurrentList([]));
      }

      onCloseBtn();
    },
    [dispatch, onCloseBtn]
  );

  const onReverseSortBy = useCallback(
    (type: SortType) => {
      const list: IPokemonList[] = convertPokeData(cloneDeep(pokeData));
      const filteredData: IPokemonList[] = list.sort(
        (a, b) => a[type] - b[type]
      );

      if (filteredData?.length > 0) {
        dispatch(setPokemonList(filteredData));
        dispatch(resetCurrentList([]));
      }

      onCloseBtn();
    },
    [dispatch, onCloseBtn]
  );

  return (
    <SortButtonWrapper>
      {type === "type" &&
        list &&
        list.map((type: string, i: number) => {
          return (
            <ItemStyled
              key={i}
              $borderColor={getColor(type)}
              color={getColor(type)}
              onClick={() => onSort(type, "type")}
            >
              {getTypeKo(type)}
            </ItemStyled>
          );
        })}
      {type === "gene" &&
        list &&
        list.map((gene: string, i: number) => {
          return (
            <WhiteItemStyled key={i} onClick={() => onSort(gene, "gene")}>
              {gene}
            </WhiteItemStyled>
          );
        })}
      {!list && (
        <WhiteItemStyled onClick={() => onSortBy(type as SortType)}>
          높은 순
        </WhiteItemStyled>
      )}
      {!list && (
        <WhiteItemStyled onClick={() => onReverseSortBy(type as SortType)}>
          낮은 순
        </WhiteItemStyled>
      )}
    </SortButtonWrapper>
  );
};

export default SortModalItemBtns;

const SortButtonWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 48%);
  justify-content: space-evenly;
  padding-bottom: 10px;
`;

const ItemStyled = styled.div<{ $borderColor: string; color: string }>`
  padding: 5px;
  text-align: center;
  font-size: 13px;
  margin-top: 3px;
  background-color: white;
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.$borderColor};

  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
`;

const WhiteItemStyled = styled.div`
  background-color: white;
  color: black;
  border: 1px solid lightgray;
  padding: 5px;
  text-align: center;
  font-size: 13px;
  margin-top: 3px;
  background-color: white;
  color: black;
  border: 1px solid;

  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
`;
