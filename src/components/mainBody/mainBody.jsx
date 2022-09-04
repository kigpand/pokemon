import { useState } from 'react';
import { useEffect } from 'react';
import { dummy } from '../../utils/dummy';
import PokemonList from '../pokemonList/pokemonList';
import styles from './mainBody.module.scss';

const MainBody = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        setData([...dummy]);
    }, []);

    return(
        <div className={styles.mainBody}>
            {data.map((data) => {
                return <PokemonList pokemon={data} key={data.name}/>; 
            })}
        </div>
    )
}

export default MainBody;