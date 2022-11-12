import styles from './mainHeader.module.scss';
import LOGO from '../../imgs/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPoke, setGenerate } from '../../reducers/pokemon';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setDataCount } from '../../reducers/datas';
import { RootState } from '../../store/store';
import { IPokemonList } from '../../interface/IPokemonList';
import React, { KeyboardEvent } from 'react';

const MainHeader = () => {

    const searchRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    const [isGene, setIsGene] = useState(false);
    const generateList = ['1세대', '2세대', '3세대', '4세대', '5세대', '6세대', '7세대', '8세대'];
    const pokemonList = useSelector((state: RootState) => state.pokemon.pokemonList);
    const nav = useNavigate();

    function onGenerate(v: string) {
        setIsGene(false);
        dispatch(setDataCount(10));
        dispatch(setGenerate(v));
    }

    function onGenerateAll() {
        setIsGene(false);
        dispatch(setGenerate('all'));
    }

    function onSearchItem(e: KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            const list = pokemonList.find((v: IPokemonList) => v.species.name === searchRef.current?.value);
            if (list?.species.name) {
                dispatch(setCurrentPoke(list));
                nav('/detail');
            } else {
                dispatch(setCurrentPoke(null));
                alert('찾는 포켓몬이 없습니다');
            }
            
            searchRef.current!.value = '';
        }
    }

    return (
        <div className={styles.mainHeader}>
            <img src={LOGO} className={styles.logo} alt='logo'></img>
            {isGene 
            ? <div className={styles.generateList}>
                <div className={styles.listHeader}>세대를 선택하세요</div>
                <div className={styles.listItems}>
                    <div className={styles.listItem} onClick={onGenerateAll}>전 세대 보기</div>
                    { generateList.map((v: string) => {
                        return <div className={styles.listItem} key={v} onClick={() => onGenerate(v)}>{v}</div>
                    })}
                </div>
            </div>
            :<div className={styles.generateBtn} onClick={() => setIsGene(true)}>세대를 선택하세요</div>}
            <input type='text' className={styles.search} ref={searchRef} placeholder='검색...' onKeyDown={onSearchItem}></input>
        </div>
    )
}

export default MainHeader;