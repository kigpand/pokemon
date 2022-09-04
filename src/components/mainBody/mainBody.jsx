import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { dummy } from '../../utils/dummy';
import PokemonList from '../pokemonList/pokemonList';
import styles from './mainBody.module.scss';

const MainBody = () => {

    const [data, setData] = useState([]);
    const generate = useSelector((state) => state.pokemon.generate);

    useEffect(() => {
        setData([...dummy]);
    }, []);

    useEffect(() => {
        if (generate !== null) {
            if (generate === 'all') {
                return setData(dummy);
            } else {
                const array = dummy.filter((item) => item.generate === generate);
                setData(array);
            }
        }
    }, [generate]);

    return(
        <div className={styles.mainBody}>
            {data.map((data) => {
                return <PokemonList pokemon={data} key={data.name}/>; 
            })}
        </div>
    )
}

export default MainBody;