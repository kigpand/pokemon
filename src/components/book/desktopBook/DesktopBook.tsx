import { IPokemonList } from "../../../interface/IPokemonList";
import PokemonList from "../../pokemonList/pokemonList";
import styles from "./DesktopBook.module.scss";
import DELETE from "../../../imgs/delete.png";
import { useBookList } from "../../../hooks/useBookList";

const DesktopBook = () => {
  const { bookPokeList, onRemove } = useBookList();

  return (
    <div className={styles.desktopBook}>
      {bookPokeList.length > 0 && (
        <div className={styles.lists}>
          {bookPokeList.map((item: IPokemonList, i: number) => {
            return (
              <div className={styles.listContainer} key={i}>
                <img
                  src={DELETE}
                  className={styles.removeBtn}
                  alt="delete"
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
