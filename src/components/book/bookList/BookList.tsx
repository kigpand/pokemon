import { useNavigate } from "react-router-dom";
import { IPokemonList } from "../../../interface/IPokemonList";
import styles from "./BookList.module.scss";
import { useBookList } from "../../../hooks/useBookList";
import { AiFillDelete, AiOutlineSearch } from "react-icons/ai";

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
    <div className={styles.bookList}>
      <div className={styles.id}>No.{item.list.id}</div>
      <div className={styles.name}>{item.list.name}</div>
      <div className={styles.total}>종족치: {item.list.allStat}</div>
      <div className={styles.btns}>
        <AiOutlineSearch className={styles.btn} onClick={onDetail} />
        <AiFillDelete
          className={styles.btn}
          onClick={() => onRemove(item.list)}
        />
      </div>
    </div>
  );
};

export default BookList;
