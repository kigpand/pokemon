import { useRef } from 'react';
import { useState, useCallback } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PokemonList from '../pokemonList/pokemonList';
import styles from './mainBody.module.scss';
import { RootState } from '../../store/store';
import { IPokemonList } from '../../interface/IPokemonList';
import ARROW from '../../imgs/arrow.png';
import { getPokemon } from '../../utils/network';
import { addPokeList } from '../../utils/makeData';
import { setPokemonList } from '../../reducers/pokemon';
import { setDataCount } from '../../reducers/datas';

const MainBody = () => {

    const [list, setList] = useState<IPokemonList[]>([]);
    const [onFetch, setOnFetch] = useState<Boolean>(false);
    const pokemonList = useSelector((state: RootState) => state.pokemon.pokemonList);
    const { dataCount, scrollPoint } = useSelector((state: RootState) => state.datas);
    const bodyRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        setList([...pokemonList]);
    }, [pokemonList]);

    function returnToTop() {
        window.scrollTo(0, 0);
    }

    const onFetchData = useCallback(async (count: number) => {
        await getPokemon(count).then(async(v) => {
            const list = await addPokeList(v);
            dispatch(setPokemonList(list));
            setOnFetch(false);
        });
    }, [dispatch]);

    function onScroll() {
        if(window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 20){
            setOnFetch(true);
        }
    }

    useEffect(() => {
        if (onFetch) {
            onFetchData(dataCount).then(() => dispatch(setDataCount(dataCount + 10)));
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'scroll';
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [onFetch]);

    useEffect(() => {
        onFetchData(dataCount).then(() => dispatch(setDataCount(dataCount + 10)));
        window.addEventListener('scroll', onScroll);

        return (() => {
            window.removeEventListener('scroll', onScroll);
        });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, scrollPoint);
        }, 10);
    }, [scrollPoint]);

    return(
        <div className={styles.mainBody} ref={bodyRef}>
            <div className={styles.lists}>
                {list.map((data: IPokemonList, i: number) => {
                    return <PokemonList pokemon={data} key={i} />; 
                })}
            </div>
            <img src={ARROW} alt='arrow' className={styles.topBtn} onClick={returnToTop}></img>
            { onFetch && <div className={styles.loading}><div className={styles.spinner}></div></div> }
            { onFetch && <div className={styles.block} />}
        </div>
    )
}

export default MainBody;