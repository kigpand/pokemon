import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PokemonList from '../pokemonList/pokemonList';
import styles from './mainBody.module.scss';

const MainBody = () => {

    const [data, setData] = useState([]);
    const pokemonList = useSelector((state) => state.pokemon.pokemonList);
    const generate = useSelector((state) => state.pokemon.generate);

    useEffect(() => {
        if (generate !== null) {
            if (generate === 'all') {
                return setData(pokemonList.slice(370, 380));
            } else {
                // const array = dummy.filter((item) => item.generate === generate);
                // setData(array);
            }
        }
    }, [generate, pokemonList]);

    return(
        <div className={styles.mainBody}>
            {data.map((data) => {
                return <PokemonList pokemon={data} key={data.name}/>; 
            })}
        </div>
    )
}

export default MainBody;