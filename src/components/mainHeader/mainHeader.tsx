import styles from './mainHeader.module.scss';
import LOGO from '../../imgs/logo.png';
import { useDispatch } from 'react-redux';
import { setCurrentPoke } from '../../reducers/pokemon';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import React, { KeyboardEvent } from 'react';
import { getPokeData } from '../../utils/makeData';
import { getPokeItem } from '../../utils/network';

const MainHeader = () => {

    const searchRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    const nav = useNavigate();

    function onSearchItem(e: KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            // try {
            //     getPokeItem(Number(searchRef.current?.value)).then(async (v) => {
            //         const item = await getPokeData(v);
            //         dispatch(setCurrentPoke(item));
            //         nav('/detail');
            //     }).catch((e) => {
            //         alert('올바른 도감번호를 입력해주세요.');
            //     });
            // } catch {
            //     alert('올바른 도감번호를 입력해주세요.');
            // }

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