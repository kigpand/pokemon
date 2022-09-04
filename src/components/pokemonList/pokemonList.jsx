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
            {pokemon.name}
        </div>
    )
}

export default PokemonList;