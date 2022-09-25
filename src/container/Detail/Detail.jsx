import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPoke } from '../../reducers/pokemon';
import styles from './Detail.module.scss';

const Detail = () => {

    const currentPoke = useSelector((state) => state.pokemon.currentPoke);
    const [status, setStatus] = useState([]);
    const [abilities, setAbilities] = useState([]);
    const [pokeTypes, setPokeTypes] = useState([]);
    const [genus, setGenus] = useState([]);
    const dispatch = useDispatch();

    const makeStateItem = useCallback(() => {
        const items = currentPoke.states.split(',');
        const splitItems = items.map((item) => {
            if (item === 'hp') return 'HP';
            if (item === 'attack') return '공격';
            if (item === 'defense') return '방어';
            if (item === 'special-attack') return '특수공격';
            if (item === 'special-defense') return '특수방어';
            if (item === 'speed') return '스피드';
            return item;
        });
        const stateItem = [];
        stateItem.push({ name: '무게', stat: currentPoke.weight + 'g'});
        stateItem.push({ name: '키', stat: currentPoke.height + 'm'});
        stateItem.push({ name : splitItems[0], stat: splitItems[1]});
        stateItem.push({ name : splitItems[2], stat: splitItems[3]});
        stateItem.push({ name : splitItems[4], stat: splitItems[5]});
        stateItem.push({ name : splitItems[6], stat: splitItems[7]});
        stateItem.push({ name : splitItems[8], stat: splitItems[9]});
        stateItem.push({ name : splitItems[10], stat: splitItems[11]});

        setStatus(stateItem);
    }, [currentPoke]);

    const makeAbilitie = useCallback(() => {
        const abils = currentPoke.abilities.split(',');
        setAbilities([...abils]);
    }, [currentPoke]);

    const makeTypes = useCallback(() => {
        const types = currentPoke.pokeTypes.split(',');
        setPokeTypes([...getTypeKo(types)]);
    }, [currentPoke]);

    function getTypeKo(types) {
        const converting = types.map((type) => {
            if (type === 'water') return '물';
            return null;
        })

        return converting;
    }

    function getColor(type) {
        if (type === '물') return '#5ec4ff';
    }

    function getBackgroundColor(type) {
        if (type === '물') return '#0b8cd6';
    }

    const makeGenus = useCallback(() => {
        const gene = currentPoke.genus.split(',');
        setGenus([...gene]);
    }, [currentPoke]);

    useEffect(() => {
        if (currentPoke) {
            makeStateItem();
            makeAbilitie();
            makeTypes();
            makeGenus();
        }
    }, [currentPoke, makeStateItem, makeAbilitie, makeTypes, makeGenus]);

    function onTest() {
        dispatch(setCurrentPoke(null));
    }

    return (
        <div className={styles.detail} onClick={onTest} style={{ borderColor: getBackgroundColor(pokeTypes[0])}}>
            <div className={styles.num} style={{ color: getColor(pokeTypes[0])} }>No.{currentPoke.id} {currentPoke.name}</div>
            <div className={styles.generate} style={{ color: getColor(pokeTypes[0]), borderColor: getBackgroundColor(pokeTypes[0])} }>{currentPoke.generate}</div>
            <img src={currentPoke.imageUrl} alt={currentPoke.name} className={styles.img}></img>
            <div></div>
            <div className={styles.genus}>
                <div className={styles.miniTitle} style={{ backgroundColor: getBackgroundColor(pokeTypes[0])}}>분류</div>
                <div className={styles.mainContents}>
                    { genus && genus.map((gene, i) => {
                        return <span key={i}>{gene}</span>
                    })}
                </div>
            </div>
            <div className={styles.types}>
                <div className={styles.miniTitle} style={{ backgroundColor: getBackgroundColor(pokeTypes[0])}}>타입</div>
                <div className={styles.mainContents}>
                    { pokeTypes && pokeTypes.map((type, i) => {
                        return <span key={i} className={styles.type} style={{backgroundColor: getColor(type)}}>{type}</span>
                    })}
                </div>
            </div>
            <div className={styles.abilities}>
                <div className={styles.miniTitle} style={{ backgroundColor: getBackgroundColor(pokeTypes[0])}}>특성</div>
                <div className={styles.mainContents}>
                    { abilities && abilities.map((abil, i) => {
                        return <span key={i}>{abil}</span>
                    })}
                </div>
            </div>
            <div className={styles.status}>
                <div className={styles.miniTitle} style={{ backgroundColor: getBackgroundColor(pokeTypes[0])}}>종족값</div>
                <div className={styles.mainContents}>
                    { status && status.map((stat, i) => {
                        return <div key={i}><b>{stat.name}</b>: {stat.stat}</div>
                    })}
                </div>
            </div>
            <div className={styles.flavor}>{currentPoke.flavor}</div>
        </div>
    )
}

export default Detail;