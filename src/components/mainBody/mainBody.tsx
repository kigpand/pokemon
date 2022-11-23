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
import { setCurrentList, setPokemonList } from '../../reducers/pokemon';
import { setDataCount } from '../../reducers/datas';

const MainBody = () => {
    const [scroll, setScroll] = useState<number>(0);
    const { pokemonList, currentList } = useSelector((state: RootState) => state.pokemon);
    const { dataCount, scrollPoint } = useSelector((state: RootState) => state.datas);
    const bodyRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();

    function returnToTop() {
        window.scrollTo(0, 0);
    }

    const onFetchData = useCallback(async () => {
        await getPokemon().then(async(v) => {
            dispatch(setPokemonList(v));
            const setting: IPokemonList[] = [];
            for(let i = dataCount; i < dataCount + 20; i++) {
                setting.push(v[i]);
            }
            dispatch(setCurrentList(setting));
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    const onScroll = () => {
        if(window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 20){
            setScroll(window.scrollY);
        }
    }

    useEffect(() => {
        onFetchData().then(() => {
            dispatch(setDataCount(dataCount + 20));
        });
        window.addEventListener('scroll', onScroll);

        return (() => {
            window.removeEventListener('scroll', onScroll);
        });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (scroll !== 0) {
            const item: any[] = [];
            for( let i = dataCount; i < dataCount + 10; i++) {
                item.push(pokemonList[i]);
            }
            dispatch(setCurrentList(item));
            dispatch(setDataCount(dataCount + 10));
        }
    }, [scroll]);

    useEffect(() => {
        // setTimeout(() => {
        //     window.scrollTo(0, scrollPoint);
        // }, 10);
    }, [scrollPoint]);

    return(
        <div className={styles.mainBody} ref={bodyRef}>
            <div className={styles.lists}>
                {currentList.map((data: IPokemonList, i: number) => {
                    return <PokemonList pokemon={data} key={i} />; 
                })}
            </div>
            <img src={ARROW} alt='arrow' className={styles.topBtn} onClick={returnToTop}></img>
        </div>
    )
}

export default MainBody;