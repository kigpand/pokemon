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
            if (type === 'grass') return '풀';
            if (type === 'poison') return '독';
            if (type === 'fire') return '불';
            if (type === 'normal') return '노말';
            if (type === 'electric') return '전기';
            if (type === 'ice') return '얼음';
            if (type === 'fighting') return '격투';
            if (type === 'ground') return '땅';
            if (type === 'flying') return '비행';
            if (type === 'psychic') return '에스퍼';
            if (type === 'bug') return '벌레';
            if (type === 'rock') return '바위';
            if (type === 'ghost') return '고스트';
            if (type === 'dragon') return '드래곤';
            if (type === 'dark') return '악';
            if (type === 'steel') return '강철';
            if (type === 'fairy') return '페어리';
            return null;
        })

        return converting;
    }

    function getColor(type) {
        if (type === '물') return '#5ec4ff';
        if (type === '풀') return '#3aff6b';
        if (type === '독') return '#b639ff';
        if (type === '불') return '#ff0000';
        if (type === '노말') return '#888888';
        if (type === '전기') return '#fff34a';
        if (type === '얼음') return '#42f9ff';
        if (type === '격투') return '#b15429';
        if (type === '땅') return '#b46c00';
        if (type === '비행') return '#1f66ff';
        if (type === '에스퍼') return '#fa51b3';
        if (type === '벌레') return '#257439';
        if (type === '바위') return '#977f13';
        if (type === '고스트') return '#5e379e';
        if (type === '드래곤') return '#4251aa';
        if (type === '악') return '#584a30';
        if (type === '강철') return '#797979';
        if (type === '페어리') return '#ff35b2';
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
        document.getElementById('app').style.overflowY = 'visible';
    }

    return (
        <div className={styles.detail} onClick={onTest} style={{ borderColor: getColor(pokeTypes[0])}}>
            <div className={styles.num}>No.{currentPoke.id} {currentPoke.name}</div>
            <div className={styles.generate} style={{ borderColor: getColor(pokeTypes[0])} }>{currentPoke.generate}</div>
            <img src={currentPoke.imageUrl} alt={currentPoke.name} className={styles.img}></img>
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
                        return <span key={i} className={styles.type} style={{backgroundColor: getColor(type)}}>{type}</span>
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
                    { status && status.map((stat, i) => {
                        return <div key={i}><b>{stat.name}</b>: {stat.stat}</div>
                    })}
                </div>
            </div>
            <b>정보</b>
            <div className={styles.flavor}>{currentPoke.flavor}</div>
        </div>
    )
}

export default Detail;