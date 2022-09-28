import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PokemonList from '../pokemonList/pokemonList';
import styles from './mainBody.module.scss';

const MainBody = () => {

    const [data, setData] = useState([]);
    const [num, setNum] = useState(10);
    const [list, setList] = useState([]);
    const pokemonList = useSelector((state) => state.pokemon.pokemonList);
    const generate = useSelector((state) => state.pokemon.generate);
    const observerRef = useRef();
    const bottomRef = useRef();

    useEffect(() => {
        setNum(10);
    }, [generate]);

    useEffect(() => {
        if (generate !== null) {
            if (generate === 'all') {
                setList([...pokemonList]);
            } else {
                const result = pokemonList.filter((list) => list.generate === generate);
                setList([...result]);
            }
        }
    }, [generate, pokemonList]);

    const intersectionObserver = (entries, io) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) { 
                io.unobserve(entry.target); 
                onAddListCount();
            }
        })
    }

    useEffect(() => {
        observerRef.current = new IntersectionObserver(intersectionObserver)
        bottomRef.current && observerRef.current.observe(bottomRef.current);
        setData(list.slice(0, num));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [num])

    function onAddListCount() {
        setNum(num + 10);
    }

    useEffect(() => {
        setData(list.slice(0, num));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [list]);

    function resetNum() {
        setNum(10);
        setData(list.slice(0, 10));
        window.scrollTo(0,0);
    }

    return(
        <div className={styles.mainBody}>
            <div className={styles.lists}>
                {data.map((data) => {
                    return <PokemonList pokemon={data} resetNum={resetNum} key={data.name}/>; 
                })}
            </div>
            <div className={styles.bottom} ref={bottomRef}>bottom</div>
        </div>
    )
}

export default MainBody;