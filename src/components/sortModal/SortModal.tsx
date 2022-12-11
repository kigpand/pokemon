import '../../common/event.scss';
import styles from './SortModal.module.scss';
import { useRef } from 'react';
import { typeList, geneList } from './sort';
import pokeData from '../../json/pokemonList.json';
import { useDispatch } from 'react-redux';
import { resetCurrentList, setPokemonList } from '../../reducers/pokemon';
import { convertPokeData } from '../../utils/makeData';
import SortBtns from './SortBtns';
import { useState } from 'react';

interface ISortModal {
    closeSort: () => void;
}

const SortModal = ({ closeSort }: ISortModal) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();
    const [selectOption, setSelectOption] = useState<string>('id');

    function onCloseBtn() {
        if (modalRef.current) {
            modalRef.current.style.animation = 'closeModal .8s forwards';
            modalRef.current.addEventListener('animationend', () => {
                closeSort();
            });
        }
    }

    function onResetBtn() {
        const list = convertPokeData(pokeData);
        dispatch(setPokemonList(list));
        dispatch(resetCurrentList([]));
        onCloseBtn();
    }

    return (
        <div className={styles.sortModal} ref={modalRef}>
            <div className={styles.sortBtn} onClick={onCloseBtn}>닫기</div>
            <div className={styles.resetBtn} onClick={onResetBtn}>초기화</div>
            <div className={styles.title}>정렬</div>
            <div className={styles.selectContainer}>
                <select className={styles.select} onChange={(e:React.ChangeEvent<HTMLSelectElement>) => setSelectOption(e.target.value)}>
                    <option value='id'>도감번호</option>
                    <option value='weight'>무게</option>
                    <option value='height'>키</option>
                    <option value='hp'>HP</option>
                    <option value='공격'>공격</option>
                    <option value='방어'>방어</option>
                    <option value='특수공격'>특수공격</option>
                    <option value='특수방어'>특수방어</option>
                    <option value='스피드'>스피드</option>
                    <option value='총합'>총합</option>
                </select>
            </div>
            <SortBtns type={selectOption} onCloseBtn={onCloseBtn} />
            <div className={styles.title}>타입</div>
            <SortBtns type='type' list={typeList} onCloseBtn={onCloseBtn} />
            <div className={styles.title}>세대</div>
            <SortBtns type='gene' list={geneList} onCloseBtn={onCloseBtn} />
        </div>
    )
}

export default SortModal;