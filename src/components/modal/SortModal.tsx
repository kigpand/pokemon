import pokeData from "json/pokemonList.json";
import SortSelect from "./SortModalSelect";
import SortItem from "./SortModalItem";
import styled from "styled-components";
import { typeList, geneList } from "../../utils/sort";
import { useDispatch } from "react-redux";
import { convertPokeData } from "utils/makeData";
import { resetCurrentList, setPokemonList } from "reducers/pokemon";
import ModalPortal from "ModalPortal";

interface ISortModal {
  closeSort: () => void;
}

const SortModal = ({ closeSort }: ISortModal) => {
  const dispatch = useDispatch();

  function onResetBtn() {
    const list = convertPokeData(pokeData);
    dispatch(setPokemonList(list));
    dispatch(resetCurrentList([]));
    closeSort();
  }

  return (
    <ModalPortal
      component={
        <SortModalWrapper>
          <SortSelect onCloseBtn={closeSort} />
          <SortItem title="타입" list={typeList} onCloseBtn={closeSort} />
          <SortItem title="세대" list={geneList} onCloseBtn={closeSort} />
          <SortButton onClick={closeSort}>닫기</SortButton>
          <ResetButton onClick={onResetBtn}>초기화</ResetButton>
        </SortModalWrapper>
      }
      handleCloseModal={closeSort}
    />
  );
};

export default SortModal;

const SortModalWrapper = styled.article`
  width: 300px;
  padding: 10px;
  right: 10px;
  top: 10px;
  border: 1px solid lightgray;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const ButtonStyled = styled.div`
  width: 100%;
  border-radius: 4px;
  height: 30px;
  font-size: 13px;
  margin-top: 5px;
  text-align: center;
  line-height: 30px;
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
