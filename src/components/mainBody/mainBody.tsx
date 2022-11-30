import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PokemonList from '../pokemonList/pokemonList';
import styles from './mainBody.module.scss';
import { RootState } from '../../store/store';
import { IPokemonList } from '../../interface/IPokemonList';
import ARROW from '../../imgs/arrow.png';
import { convertPokeData } from '../../utils/makeData';
import { setCurrentList, setPokemonList } from '../../reducers/pokemon';
import pokeData from '../../json/pokemonList.json';

const MainBody = () => {
    const [scroll, setScroll] = useState<number>(0);
    const { pokemonList, currentList } = useSelector((state: RootState) => state.pokemon);
    const { scrollPoint } = useSelector((state: RootState) => state.datas);
    const bodyRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();

    function returnToTop() {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        if (pokemonList.length === 0) {
            const loadList: IPokemonList[] = convertPokeData(pokeData);
            dispatch(setPokemonList(loadList));
        }
        window.addEventListener('scroll', onScroll);

        return (() => {
            window.removeEventListener('scroll', onScroll);
        });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (pokemonList.length > 0 && currentList.length === 0) {
            const setting: IPokemonList[] = [];
            for(let i = 0; i < 20; i++) {
                setting.push(pokemonList[i]);
            }
            dispatch(setCurrentList(setting));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pokemonList]);

    const onScroll = () => {
        if(window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 20){
            setScroll(window.scrollY);
        }
    }

    useEffect(() => {
        if (scroll !== 0) {
            const item: any[] = [];
            const count = currentList.length;
            for( let i = count; i < count + 10; i++) {
                if (pokemonList[i]) item.push(pokemonList[i]);
            }
            dispatch(setCurrentList(item));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scroll]);

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, scrollPoint);
        }, 10);
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