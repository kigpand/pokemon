import styles from "./MobileBook.module.scss";
import { IPokemonList } from "../../../interface/IPokemonList";
import { useBookList } from "../../../hooks/useBookList";
import BookList from "../bookList/BookList";

const MobileBook = () => {
  const { bookPokeList } = useBookList();

  return (
    <div className={styles.mobileBook}>
      {bookPokeList.length > 0 &&
        bookPokeList.map((pokeList: IPokemonList) => {
          return <BookList key={pokeList.id} list={pokeList} />;
        })}
    </div>
  );
};

export default MobileBook;
