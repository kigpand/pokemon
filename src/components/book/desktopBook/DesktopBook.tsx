import { IPokemonList } from "../../../interface/IPokemonList";
import PokemonList from "../../pokemonList/pokemonList";
import styles from "./DesktopBook.module.scss";
import { useBookList } from "../../../hooks/useBookList";
import { AiFillDelete } from "react-icons/ai";

const DesktopBook = () => {
  const { bookPokeList, onRemove } = useBookList();

  return (
    <div className={styles.desktopBook}>
      {bookPokeList.length > 0 && (
        <div className={styles.lists}>
          {bookPokeList.map((item: IPokemonList, i: number) => {
            return (
              <div className={styles.listContainer} key={i}>
                <AiFillDelete
                  className={styles.removeBtn}
                  onClick={() => onRemove(item)}
                />
                <PokemonList pokemon={item} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DesktopBook;
