import '../../common/event.scss';
import styles from './SortModal.module.scss';
import { useRef } from 'react';
import { typeList, geneList } from './sort';
import pokeData from '../../json/pokemonList.json';
import { useDispatch } from 'react-redux';
import { resetCurrentList, setPokemonList } from '../../reducers/pokemon';
import { convertPokeData } from '../../utils/makeData';
import SortBtns from './SortBtns';

interface ISortModal {
    closeSort: () => void;
}

const SortModal = ({ closeSort }: ISortModal) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();

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
            <div className={styles.title}>도감번호</div>
            <SortBtns type='id' onCloseBtn={onCloseBtn} />
            <div className={styles.title}>무게</div>
            <SortBtns type='weight' onCloseBtn={onCloseBtn} />
            <div className={styles.title}>키</div>
            <SortBtns type='height' onCloseBtn={onCloseBtn} />
            <div className={styles.title}>타입</div>
            <SortBtns type='type' list={typeList} onCloseBtn={onCloseBtn} />
            <div className={styles.title}>세대</div>
            <SortBtns type='gene' list={geneList} onCloseBtn={onCloseBtn} />
        </div>
    )
}

export default SortModal;