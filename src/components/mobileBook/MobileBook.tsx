import styles from './MobileBook.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { IPokemonList } from '../../interface/IPokemonList';
import BookList from '../../components/bookList/BookLIst';

const MobileBook = () => {

    const bookPokeList = useSelector((state: RootState) => state.pokemon.bookPokeList);

    return (
        <div className={styles.mobileBook}>
            { bookPokeList.length > 0 && bookPokeList.map((pokeList: IPokemonList) => {
                return <BookList key={pokeList.id} list={pokeList} />
            })}
        </div>
    )
}

export default MobileBook;