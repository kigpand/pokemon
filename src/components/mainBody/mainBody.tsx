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
    const bottomRef = useRef<HTMLDivElement>(null);
    const bodyRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (generate !== null) {
            if (generate === 'all') {
                setList([...pokemonList]);
            } else {
                const result = pokemonList.filter((list) => list.species.generation === generate);
                setList([...result]);
            }
        } else {
            setList([...pokemonList]);
        }
    }, [generate, pokemonList]);

    function returnToTop() {
        window.scrollTo(0, 0);
    }

    return(
        <div className={styles.mainBody} ref={bodyRef}>
            <div className={styles.lists}>
                {list.map((data: IPokemonList, i: number) => {
                    return <PokemonList pokemon={data} key={i} />; 
                })}
            </div>
            <div className={styles.bottom} ref={bottomRef}>bottom</div>
            <img src={ARROW} alt='arrow' className={styles.topBtn} onClick={returnToTop}></img>
        </div>
    )
}

export default MainBody;