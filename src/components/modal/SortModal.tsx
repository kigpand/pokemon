import pokeData from "json/pokemonList.json";
import SortSelect from "./SortModalSelect";
import SortItem from "./SortModalItem";
import styled from "styled-components";
import { typeList, geneList } from "../../utils/sort";
import { useDispatch, useSelector } from "react-redux";
import { convertPokeData } from "utils/makeData";
import { RootState } from "store/store";
import { resetCurrentList, setPokemonList } from "reducers/pokemon";

interface ISortModal {
  closeSort: () => void;
}

const SortModal = ({ closeSort }: ISortModal) => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.datas.theme);

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
    <SortModalWrapper $backgroundColor={theme === "dark" ? "black" : "white"}>
      <SortButton onClick={onCloseBtn}>닫기</SortButton>
      <ResetButton onClick={onResetBtn}>초기화</ResetButton>
      <SortSelect onCloseBtn={onCloseBtn} />
      <SortItem title="타입" list={typeList} onCloseBtn={onCloseBtn} />
      <SortItem title="세대" list={geneList} onCloseBtn={onCloseBtn} />
    </SortModalWrapper>
  );
};

export default SortModal;

const SortModalWrapper = styled.article<{ $backgroundColor: string }>`
  width: 200px;
  padding: 10px;
  position: absolute;
  right: 10px;
  top: 10px;
  border: 1px solid lightgray;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.$backgroundColor};
`;

const ButtonStyled = styled.div`
  width: 90%;
  border-radius: 4px;
  height: 20px;
  font-size: 13px;
  margin-top: 5px;
  text-align: center;
  line-height: 20px;
  font-weight: bold;
  cursor: pointer;
`;

const SortButton = styled(ButtonStyled)`
  border: 1px solid lightgray;
  &:hover {
    background-color: lightgray;
  }
`;

const ResetButton = styled(ButtonStyled)`
  background-color: skyblue;
  color: white;

  &:hover {
    background-color: blue;
  }
`;
