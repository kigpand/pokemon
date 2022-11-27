import { getColor, getTypeConvertData, getTypeKo } from '../../utils/convert';
import styles from './SortBtns.module.scss';
import pokeData from '../../json/pokemonList.json';
import { convertPokeData } from '../../utils/makeData';
import { useDispatch } from 'react-redux';
import { resetCurrentList, setPokemonList } from '../../reducers/pokemon';
import { IPrevList } from '../../interface/IPrveList';

interface ISortBtns {
    type: string;
    list?: any;
    onCloseBtn: () => void
}
const SortBtns = ({ type, list, onCloseBtn }: ISortBtns) => {

    const dispatch  = useDispatch();

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

    function onSortBy(type: string) {
        const list: IPrevList[] = JSON.parse(JSON.stringify(pokeData));
        let filteredData: IPrevList[] = [];
        switch(type) {
            case 'id':
                filteredData = list.sort((a, b) => b.id - a.id);
                break;
            case 'weight':
                filteredData = list.sort((a, b) => b.weight - a.weight);
                break;
            case 'height':
                filteredData = list.sort((a, b) => b.height - a.height);
                break;
            default:
                break;
        }

        if (filteredData?.length > 0) {
            const setting = convertPokeData(filteredData);
            dispatch(setPokemonList(setting));
            dispatch(resetCurrentList([]));
        }

        onCloseBtn();
    }

    function onReverseSortBy(type: string) {
        const list: IPrevList[] = JSON.parse(JSON.stringify(pokeData));
        let filteredData: IPrevList[] = [];
        switch(type) {
            case 'id':
                filteredData = list.sort((a, b) => a.id - b.id);
                break;
            case 'weight':
                filteredData = list.sort((a, b) => a.weight - b.weight);
                break;
            case 'height':
                filteredData = list.sort((a, b) => a.height - b.height);
                break;
            default:
                break;
        }

        if (filteredData?.length > 0) {
            const setting = convertPokeData(filteredData);
            dispatch(setPokemonList(setting));
            dispatch(resetCurrentList([]));
        }

        onCloseBtn();
    }

    return (
        <div className={styles.sortBtns}>
            { type === 'type' &&
                list.map((type: string, i: number) => {
                    return <div key={i} style={{ backgroundColor: getColor(type)}} onClick={() => onSort(type, 'type')}>{getTypeKo(type)}</div>
                })
            }
            { type === 'gene' && 
                list.map((gene: string, i: number) => {
                    return <div key={i} className={styles.gene} onClick={() => onSort(gene, 'gene')}>{gene}</div>
                })
            }
            { !list && <div className={styles.item} onClick={() => onSortBy(type)}>높은 순</div>}
            { !list && <div className={styles.item} onClick={() => onReverseSortBy(type)}>낮은 순</div>}
        </div>
    )
}

export default SortBtns;