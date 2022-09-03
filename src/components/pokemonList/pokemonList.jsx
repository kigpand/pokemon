import styles from './pokemonList.module.scss';
import { useNavigate } from 'react-router-dom';

const PokemonList = ({ pokemon }) => {

    const nav = useNavigate();

    function onNav() {
        nav('/detail');
    }

    return (
        <div className={styles.list} onClick={onNav}>
            {pokemon}
        </div>
    )
}

export default PokemonList;