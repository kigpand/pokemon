import styles from './mainHeader.module.scss';
import LOGO from '../../imgs/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPoke } from '../../reducers/pokemon';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store/store';
import { IPokemonList } from '../../interface/IPokemonList';
import React, { KeyboardEvent } from 'react';

const MainHeader = () => {

    const searchRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    const pokemonList = useSelector((state: RootState) => state.pokemon.pokemonList);
    const nav = useNavigate();

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
            <input type='text' className={styles.search} ref={searchRef} placeholder='검색...' onKeyDown={onSearchItem}></input>
        </div>
    )
}

export default MainHeader;