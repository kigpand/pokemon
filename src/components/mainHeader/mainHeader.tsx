import styles from './mainHeader.module.scss';
import LOGO from '../../imgs/logo2.png';
import FILTER from '../../imgs/filter.png';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { KeyboardEvent } from 'react';
import { convertOnePoke } from '../../utils/makeData';
import SortModal from '../sortModal/SortModal';
import list from '../../json/pokemonList.json';
import { useState } from 'react'; 
import { setScrollPoint } from '../../reducers/datas';

const MainHeader = () => {

    const searchRef = useRef<HTMLInputElement>(null);
    const [onSortModal, setOnSortModal] = useState<Boolean>(false);
    const dispatch = useDispatch();
    const nav = useNavigate();

    function onSearchItem(e: KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            const isNaN = Number.isNaN(Number(searchRef.current!.value));
            const item = isNaN ? list.find((item) => item.name === searchRef.current?.value) : list.find((item) => item.id === Number(searchRef.current?.value));
            if (item) {
                const pokemon = convertOnePoke(item);
                sessionStorage.setItem('currentPoke', JSON.stringify(pokemon));
                dispatch(setScrollPoint(0));
                nav('/detail');
            } else {
                alert('올바른 도감번호를 입력해주세요.');
            }

            searchRef.current!.value = '';
        }
    }

    function openSort() {
        setOnSortModal(true);
    }

    function closeSort() {
        setOnSortModal(false);
    }

    return (
        <div className={styles.mainHeader}>
            <img src={LOGO} className={styles.logo} alt='logo'></img>
            <input type='text' className={styles.search} ref={searchRef} placeholder='도감번호나 이름을 입력해주세요' onKeyDown={onSearchItem}></input>
            <img src={FILTER} className={styles.sort} alt='sort' onClick={openSort}></img>
            { onSortModal && <SortModal closeSort={closeSort}/> }
        </div>
    )
}

export default MainHeader;