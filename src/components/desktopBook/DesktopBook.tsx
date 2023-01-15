import { useDispatch, useSelector } from 'react-redux';
import { IPokemonList } from '../../interface/IPokemonList';
import { RootState } from '../../store/store';
import PokemonList from '../pokemonList/pokemonList';
import styles from './DesktopBook.module.scss';
import DELETE from '../../imgs/delete.png';
import { removeBookPokeList } from '../../reducers/pokemon';

const DesktopBook = () => {
    const bookList = useSelector((state: RootState) => state.pokemon.bookPokeList);
    const dispatch = useDispatch();

    function onRemove(item: IPokemonList) {
        const list = { list: item };
        dispatch(removeBookPokeList(list));
    }
    
    return (
        <div className={styles.desktopBook}>
            {bookList.length > 0 && <div className={styles.lists}>
                {bookList.map((item: IPokemonList, i: number) => {
                    return (
                        <div className={styles.listContainer} key={i}>
                            <img src={DELETE} className={styles.removeBtn} alt='delete' onClick={() => onRemove(item)}/>
                            <PokemonList pokemon={item} />
                        </div>)
                })}
            </div>}
        </div>
    )
}

export default DesktopBook;