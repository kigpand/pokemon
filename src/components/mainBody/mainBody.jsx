import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PokemonList from '../pokemonList/pokemonList';
import styles from './mainBody.module.scss';

const MainBody = () => {

    const currentPoke = useSelector((state) => state.pokemon.currentPoke);
    const item = '123';

    useEffect(() => {
        console.log(currentPoke);
    }, []);

    return(
        <div className={styles.mainBody}>
            <PokemonList pokemon={item} />
        </div>
    )
}

export default MainBody;