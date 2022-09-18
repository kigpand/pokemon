import styles from './pokemonList.module.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentPoke } from '../../reducers/pokemon';

const PokemonList = ({ pokemon }) => {

    const nav = useNavigate();
    const dispatch =useDispatch();

    function onNav() {
        dispatch(setCurrentPoke(pokemon));
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