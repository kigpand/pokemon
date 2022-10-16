import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPoke } from '../../reducers/pokemon';
import styles from './detail.module.scss';
import { RootState } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import { setCurrentType } from '../../reducers/datas';
import { getColor, getTypeKo } from '../../utils/convert';

interface IStateItem {
    name: string;
    stat: string;
}

const Detail = () => {

    const currentPoke = useSelector((state: RootState) => state.pokemon.currentPoke);
    const [status, setStatus] = useState<any>([]);
    const [abilities, setAbilities] = useState<string[]>([]);
    const [pokeTypes, setPokeTypes] = useState<string[]>([]);
    const [genus, setGenus] = useState<string[]>([]);
    const nav = useNavigate();
    const dispatch = useDispatch();

    const makeStateItem = useCallback(() => {
        const items = currentPoke!.states.split(',');
        const splitItems = items.map((item) => {
            if (item === 'hp') return 'HP';
            if (item === 'attack') return '공격';
            if (item === 'defense') return '방어';
            if (item === 'special-attack') return '특수공격';
            if (item === 'special-defense') return '특수방어';
            if (item === 'speed') return '스피드';
            return item;
        });
        const stateItem: IStateItem[] = [];
        stateItem.push({ name: '무게', stat: currentPoke!.weight + 'g'});
        stateItem.push({ name: '키', stat: currentPoke!.height / 10 + 'm'});
        stateItem.push({ name : splitItems[0], stat: splitItems[1]});
        stateItem.push({ name : splitItems[2], stat: splitItems[3]});
        stateItem.push({ name : splitItems[4], stat: splitItems[5]});
        stateItem.push({ name : splitItems[6], stat: splitItems[7]});
        stateItem.push({ name : splitItems[8], stat: splitItems[9]});
        stateItem.push({ name : splitItems[10], stat: splitItems[11]});

        setStatus(stateItem);
    }, [currentPoke]);

    const makePokeStats = useCallback(() => {
        const abils = currentPoke!.abilities.split(',');
        const types = currentPoke!.pokeTypes.split(',');
        const gene = currentPoke!.genus.split(',');
        setAbilities([...abils]);
        setPokeTypes([...types]);
        setGenus([...gene]);
    }, [currentPoke]);

    useEffect(() => {
        if (currentPoke) {
            makeStateItem();
            makePokeStats();
        }
    }, [currentPoke, makeStateItem, makePokeStats]);

    function onCloseBtn() {
        dispatch(setCurrentPoke(null));
        nav('/');
    }

    function onTypeClick(type: string) {
        dispatch(setCurrentType(type));
        nav('/type');
    }

    return (
        <div className={styles.detail} style={{ borderColor: getColor(pokeTypes[0])}}>
            <div className={styles.container} style={{ borderColor: getColor(pokeTypes[0])}}>
                <div className={styles.closeBtn} style={{ borderColor: getColor(pokeTypes[0]), color: getColor(pokeTypes[0])}} onClick={onCloseBtn}>X</div>
                <div className={styles.num}>No.{currentPoke!.id} {currentPoke!.name}</div>
                <div className={styles.generate} style={{ borderColor: getColor(pokeTypes[0])} }>{currentPoke!.generate}</div>
                <img src={currentPoke!.imageUrl} alt={currentPoke!.name} className={styles.img}></img>
                <div></div>
                <div className={styles.genus}>
                    <div className={styles.miniTitle} style={{ backgroundColor: getColor(pokeTypes[0])}}>분류</div>
                    <div className={styles.mainContents}>
                        { genus && genus.map((gene, i) => {
                            return <span key={i}>{gene}</span>
                        })}
                    </div>
                </div>
                <div className={styles.types}>
                    <div className={styles.miniTitle} style={{ backgroundColor: getColor(pokeTypes[0])}}>타입</div>
                    <div className={styles.mainContents}>
                        { pokeTypes && pokeTypes.map((type, i) => {
                            return <span key={i} className={styles.type} style={{backgroundColor: getColor(type)}} onClick={() => onTypeClick(type)}>{getTypeKo(type)}</span>
                        })}
                    </div>
                </div>
                <div className={styles.abilities}>
                    <div className={styles.miniTitle} style={{ backgroundColor: getColor(pokeTypes[0])}}>특성</div>
                    <div className={styles.mainContents}>
                        { abilities && abilities.map((abil, i) => {
                            return <span key={i}>{abil}</span>
                        })}
                    </div>
                </div>
                <div className={styles.status}>
                    <div className={styles.miniTitle} style={{ backgroundColor: getColor(pokeTypes[0])}}>종족값</div>
                    <div className={styles.mainContents}>
                        { status && status.map((stat: IStateItem, i: number) => {
                            return <div key={i}><b>{stat.name}</b>: {stat.stat}</div>
                        })}
                    </div>
                </div>
                <b>정보</b>
                <div className={styles.flavor}>{currentPoke!.flavor}</div>
            </div>
        </div>
    )
}

export default Detail;