import styles from './pokemonList.module.scss';
import { useDispatch } from 'react-redux';
import { setCurrentPoke } from '../../reducers/pokemon';
import { useNavigate } from 'react-router-dom';

const PokemonList = ({ pokemon, resetNum }) => {
    const dispatch = useDispatch();
    const nav = useNavigate();

    function onNav() {
        dispatch(setCurrentPoke(pokemon));
        resetNum();
        nav('/detail');
    }

    return (
        <div className={styles.list} onClick={onNav}>
            <div className={styles.num}>No.{pokemon.id}</div>
            <img className={styles.img} src={pokemon.imageUrl} alt={pokemon.name}></img>
            <div className={styles.name}>{pokemon.name}</div>
        </div>
    )
}

export default PokemonList;