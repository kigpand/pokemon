import { useNavigate } from "react-router-dom";
import { IPokemonList } from "../../interface/IPokemonList";
import styles from "./BookList.module.scss";
import SEARCH from "../../imgs/search.png";
import DELETE from "../../imgs/delete.png";
import { useBookList } from "../../hooks/useBookList";

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
      <div className={styles.total}>종족치: {item.list.stats[6].stat}</div>
      <div className={styles.btns}>
        <img
          src={SEARCH}
          className={styles.btn}
          alt="search"
          onClick={onDetail}
        ></img>
        <img
          src={DELETE}
          className={styles.btn}
          alt="delete"
          onClick={() => onRemove(item.list)}
        ></img>
      </div>
    </div>
  );
};

export default BookList;
