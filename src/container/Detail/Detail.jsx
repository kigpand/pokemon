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
        setPokeTypes([...types]);
    }, [currentPoke]);

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
        <div className={styles.detail} onClick={onTest}>
            <div className={styles.num}>No.{currentPoke.id} {currentPoke.name}</div>
            <div className={styles.generate}>{currentPoke.generate}</div>
            <img src={currentPoke.imageUrl} alt={currentPoke.name} className={styles.img}></img>
            <div className={styles.genus}>
                <div className={styles.miniTitle}>분류</div>
                { genus && genus.map((gene, i) => {
                    return <div key={i}>{gene}</div>
                })}
            </div>
            <div className={styles.types}>
                { pokeTypes && pokeTypes.map((type, i) => {
                    return <div key={i}>{type}</div>
                })}
            </div>
            <div className={styles.abilities}>
                { abilities && abilities.map((abil, i) => {
                    return <div key={i}>{abil}</div>
                })}
            </div>
            <div className={styles.status}>
                { status && status.map((stat, i) => {
                    return <div key={i}>{stat.name}: {stat.stat}</div>
                })}
            </div>
            <div className={styles.flavor}>{currentPoke.flavor}</div>
        </div>
    )
}

export default Detail;