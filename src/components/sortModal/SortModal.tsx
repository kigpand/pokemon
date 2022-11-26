import '../../common/event.scss';
import styles from './SortModal.module.scss';
import { useRef } from 'react';
import { typeList, geneList } from './sort';
import { getColor, getTypeConvertData, getTypeKo } from '../../utils/convert';
import pokeData from '../../json/pokemonList.json';
import { useDispatch } from 'react-redux';
import { resetCurrentList, setPokemonList } from '../../reducers/pokemon';
import { convertPokeData } from '../../utils/makeData';

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

    function onSort(sortData: string, type: string) {
        let filteredData = [];
        if (type === 'type') {
            filteredData = pokeData.filter((poke) => {
                const types = getTypeConvertData(poke.pokeTypes);
                const result = types?.find((type) => type === sortData);
                return result ? true : false;
            });
        } else {
            filteredData = pokeData.filter((poke) => poke.generate === sortData);
        }

        if (filteredData?.length > 0) {
            const setting = convertPokeData(filteredData);
            dispatch(setPokemonList(setting));
            dispatch(resetCurrentList([]));
        }

        onCloseBtn();
    }

    return (
        <div className={styles.sortModal} ref={modalRef}>
            <div className={styles.sortBtn} onClick={onCloseBtn}>닫기</div>
            <div className={styles.resetBtn} onClick={onResetBtn}>초기화</div>
            <div className={styles.title}>타입</div>
            <div className={styles.container}>
                { typeList.map((type, i: number) => {
                    return <div key={i} style={{ backgroundColor: getColor(type)}} onClick={() => onSort(type, 'type')}>{getTypeKo(type)}</div>
                })}
            </div>
            <div className={styles.title}>세대</div>
            <div className={styles.container}>
                { geneList.map((gene, i: number) => {
                    return <div key={i} className={styles.gene} onClick={() => onSort(gene, 'gene')}>{gene}</div>
                })}
            </div>
        </div>
    )
}

export default SortModal;