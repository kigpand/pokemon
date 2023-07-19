import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useBookList } from "../../../hooks/useBookList";
import { IPokemonList } from "../../../interface/IPokemonList";
import styles from "./BookComponent.module.scss";
import { useState } from "react";
import AddBookModal from "../../modal/addBookModal/AddBookModal";

type Props = {
  poke: IPokemonList;
};

const BookComponent = ({ poke }: Props) => {
  const { bookPokeList, onRemove, addPokeBook } = useBookList();
  const [onBookModal, setOnBookModal] = useState<Boolean>(false);

  return (
    <div className={styles.bookComponent}>
      {bookPokeList.find((item: IPokemonList) => item.id === poke.id) ? (
        <BsHeartFill className={styles.heart} onClick={() => onRemove(poke)} />
      ) : (
        <BsHeart
          className={styles.emptyHeart}
          onClick={() => addPokeBook(poke, () => setOnBookModal(true))}
        />
      )}
      {onBookModal && (
        <AddBookModal onCloseBookModal={() => setOnBookModal(false)} />
      )}
    </div>
  );
};

export default BookComponent;
