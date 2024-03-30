import { useNavigate } from "react-router-dom";
import { IPokemonList } from "../../interface/IPokemonList";
import { useBookList } from "../../hooks/useBookList";
import { AiFillDelete, AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";

interface IBookList {
  list: IPokemonList;
}
const BookList = (item: IBookList) => {
  const nav = useNavigate();
  const { onRemove } = useBookList();

  function onDetail() {
    sessionStorage.setItem("currentPoke", JSON.stringify(item.list));
    nav("/detail");
  }

  return (
    <ListWrapper>
      <IdStyled>No.{item.list.id}</IdStyled>
      <NameStyled>{item.list.name}</NameStyled>
      <TotalStyled>종족치: {item.list.allStat}</TotalStyled>
      <ButtonStyled>
        <AiOutlineSearch className="button" onClick={onDetail} />
        <AiFillDelete className="button" onClick={() => onRemove(item.list)} />
      </ButtonStyled>
    </ListWrapper>
  );
};

export default BookList;

const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 50px;
  margin-bottom: 10px;
  font-size: 13px;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
`;

const IdStyled = styled.div`
  line-height: 50px;
  width: 20%;
  height: 100%;
  background-color: lightgray;
  padding-left: 10px;
`;

const NameStyled = styled.div`
  text-align: center;
  width: 45%;
  height: 100%;
  line-height: 50px;
  font-size: 16px;
  font-weight: bold;
`;

const TotalStyled = styled.div`
  padding-right: 20px;
  width: 20%;
  height: 100%;
  line-height: 50px;
  background-color: gray;
  text-align: end;
`;

const ButtonStyled = styled.div`
  width: 15%;
  height: 100%;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .button {
    width: 15px;
    height: 15px;
    padding: 3px;
    border: 1px solid black;
    border-radius: 50%;

    &:hover {
      cursor: pointer;
      background-color: gray;
    }
  }
`;
