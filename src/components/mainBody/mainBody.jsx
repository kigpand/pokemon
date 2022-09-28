import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PokemonList from '../pokemonList/pokemonList';
import styles from './mainBody.module.scss';

const MainBody = () => {

    const [data, setData] = useState([]);
    const pokemonList = useSelector((state) => state.pokemon.pokemonList);
    const generate = useSelector((state) => state.pokemon.generate);
    const [bottom, setBottom] = useState(null);
    const bottomOb= useRef();
    let num = 10;

    useEffect(() => {
        if (generate !== null) {
            if (generate === 'all') {
                return setData(pokemonList.slice(0, 10));
            } else {
                // const array = dummy.filter((item) => item.generate === generate);
                // setData(array);
            }
        }
    }, [generate, pokemonList]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    num += 10;
                    setData(pokemonList.slice(0, num));
                }
            }
        );
        bottomOb.current = observer;
    }, [pokemonList, data]);

    useEffect(() => {
        const observer = bottomOb.current;
        if (bottom) {
            observer.observe(bottom);
        }
        return () => {
            if (bottom) {
                observer.unobserve(bottom);
            }
        }
    }, [bottom]);

    function resetNum() {
        num = 10;
        setData(pokemonList.slice(0, num));
        window.scrollTo(0,0);
    }

    return(
        <div className={styles.mainBody}>
            <div className={styles.lists}>
                {data.map((data) => {
                    return <PokemonList pokemon={data} resetNum={resetNum} key={data.name}/>; 
                })}
            </div>
            <div className={styles.bottom} ref={setBottom}>bottom</div>
        </div>
    )
}

export default MainBody;