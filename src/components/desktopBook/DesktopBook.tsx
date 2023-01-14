import { useSelector } from 'react-redux';
import { IPokemonList } from '../../interface/IPokemonList';
import { RootState } from '../../store/store';
import PokemonList from '../pokemonList/pokemonList';
import styles from './DesktopBook.module.scss';

const DesktopBook = () => {
    const bookList = useSelector((state: RootState) => state.pokemon.bookPokeList);
    
    return (
        <div className={styles.desktopBook}>
            {bookList.length > 0 && <div className={styles.lists}>
                {bookList.map((item: IPokemonList, i: number) => {
                    return <PokemonList pokemon={item} key={i} />
                })}
            </div>}
        </div>
    )
}

export default DesktopBook;