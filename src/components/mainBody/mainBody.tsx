import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PokemonList from '../pokemonList/pokemonList';
import styles from './mainBody.module.scss';
import { setDataCount } from '../../reducers/datas';
import { RootState } from '../../store/store';
import { IPokemonList } from '../../interface/IPokemonList';
import ARROW from '../../imgs/arrow.png';

const MainBody = () => {

    const [data, setData] = useState<IPokemonList[]>([]);
    const [list, setList] = useState<IPokemonList[]>([]);
    const pokemonList = useSelector((state: RootState) => state.pokemon.pokemonList);
    const generate = useSelector((state: RootState) => state.pokemon.generate);
    const dataCount = useSelector((state: RootState) => state.datas.dataCount);
    const observerRef = useRef<IntersectionObserver | null>(null);
    const bottomRef = useRef<HTMLDivElement>(null);
    const bodyRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (generate !== null) {
            if (generate === 'all') {
                setList([...pokemonList]);
            } else {
                const result = pokemonList.filter((list) => list.generate === generate);
                setList([...result]);
            }
        } else {
            setList([...pokemonList]);
        }
    }, [generate, pokemonList]);

    const intersectionObserver = (entries: any, io: any) => {
        entries.forEach((entry: any) => {
            if(entry.isIntersecting) { 
                io.unobserve(entry.target); 
                onAddListCount();
            }
        })
    }

    useEffect(() => {
        observerRef.current = new IntersectionObserver(intersectionObserver)
        bottomRef.current && observerRef.current.observe(bottomRef.current);
        setData(list.slice(0, dataCount));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataCount])

    function onAddListCount() {
        dispatch(setDataCount(dataCount + 10));
    }

    useEffect(() => {
        setData(list.slice(0, dataCount));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [list]);

    function returnToTop() {
        window.scrollTo(0, 0);
    }

    return(
        <div className={styles.mainBody} ref={bodyRef}>
            <div className={styles.lists}>
                {data.map((data: IPokemonList) => {
                    return <PokemonList pokemon={data} key={data.name} />; 
                })}
            </div>
            <div className={styles.bottom} ref={bottomRef}>bottom</div>
            <img src={ARROW} alt='arrow' className={styles.topBtn} onClick={returnToTop}></img>
        </div>
    )
}

export default MainBody;