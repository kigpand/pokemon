import styles from "./BookFooter.module.scss";
import { useCallback } from "react";
import { IPokemonList } from "../../../interface/IPokemonList";
import { useNavigate } from "react-router-dom";
import { useBookList } from "../../../hooks/useBookList";

const BookFooter = () => {
  const { bookPokeList } = useBookList();
  const nav = useNavigate();

  function onBackBtn() {
    nav(-1);
  }

  const getData = useCallback(
    (isAvg: boolean) => {
      if (bookPokeList.length > 0) {
        let totalData: number = 0;
        bookPokeList.forEach((pokeList: IPokemonList) => {
          totalData += pokeList.allStat;
        });
        if (isAvg) {
          return Math.ceil(totalData / bookPokeList.length);
        }
        return totalData;
      }
      return 0;
    },
    [bookPokeList]
  );

  return (
    <div className={styles.bookFooter}>
      {bookPokeList.length > 0 ? (
        <div className={styles.totalData}>
          <div>평균 종족치: {getData(true)}</div>
          <div>총 종족치: {getData(false)}</div>
        </div>
      ) : (
        <div className={styles.noting}>도감에 저장된 포켓몬이 없습니다.</div>
      )}
      <div className={styles.back} onClick={onBackBtn}>
        &lt; 뒤로가기
      </div>
    </div>
  );
};

export default BookFooter;
