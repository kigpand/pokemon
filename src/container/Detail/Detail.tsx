import { useDispatch, useSelector } from 'react-redux';
import { setBookPokeList, setCurrentPoke } from '../../reducers/pokemon';
import styles from './detail.module.scss';
import { RootState } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import { setCurrentAbility, setCurrentType } from '../../reducers/datas';
import { getColor, getTypeKo } from '../../utils/convert';
import { IType } from '../../interface/IType';
import { IAbility } from '../../interface/IAbility';
import AbilityModal from '../../components/abilityModal/AbilityModal';
import { useEffect, useState } from 'react';
import AddBookModal from '../../components/addBookModal/AddBookModal';

interface IStateItem {
    name: string;
    stat: string | number;
}

const Detail = () => {

    const currentPoke = useSelector((state: RootState) => state.pokemon.currentPoke);
    const currentAbility = useSelector((state: RootState) => state.datas.currentAbility);
    const [onBookModal, setOnBookModal] = useState<Boolean>(false);
    const nav = useNavigate();
    const dispatch = useDispatch();

    function onCloseBtn() {
        dispatch(setCurrentPoke(null));
        nav('/');
    }

    function onTypeClick(type: string) {
        dispatch(setCurrentType(type));
        nav('/type');
    }

    function onAbility(ability: string) {
        dispatch(setCurrentAbility(ability));
    }

    function getStatusBarColor(name: string) {
        const backgroundColor: any = {
            'HP': 'red',
            '공격': 'orange',
            '방어': 'blue',
            '특수공격': 'pink',
            '특수방어': 'purple',
            '속도': 'green',
            '총합': null
        }

        return backgroundColor[name];
    }

    function addPokeBook() {
        dispatch(setBookPokeList(currentPoke));
        setOnBookModal(true);
    }

    function onCloseBookModal() {
        setOnBookModal(false);
    }

    return (
        <div className={styles.detail} >
            {currentPoke && currentPoke.types
            &&
            <div className={styles.container} style={{ borderColor: getColor(currentPoke.types[0])}}>
                <div className={styles.addBookBtn}  style={{ borderColor: getColor(currentPoke?.types[0]), color: getColor(currentPoke?.types[0])}} onClick={addPokeBook}>+</div>
                <div className={styles.closeBtn} style={{ borderColor: getColor(currentPoke?.types[0]), color: getColor(currentPoke?.types[0])}} onClick={onCloseBtn}>X</div>
                <div className={styles.num}>No.{currentPoke?.id} {currentPoke.name}</div>
                <div className={styles.generate} style={{ borderColor: getColor(currentPoke?.types[0])} }>{currentPoke.generate}세대</div>
                <img src={currentPoke.imageUrl} alt={currentPoke.name} className={styles.img}></img>
                <div></div>
                <div className={styles.genus}>
                    <div className={styles.miniTitle} style={{ backgroundColor: getColor(currentPoke?.types[0])}}>분류</div>
                    <div className={styles.mainContents}>
                        <span>{currentPoke.genus}</span>
                    </div>
                </div>
                <div className={styles.types}>
                    <div className={styles.miniTitle} style={{ backgroundColor: getColor(currentPoke?.types[0])}}>타입</div>
                    <div className={styles.mainContents}>
                        { currentPoke?.types && currentPoke?.types.map((type, i) => {
                            return <span key={i} className={styles.type} style={{backgroundColor: getColor(type)}} onClick={() => onTypeClick(type)}>{getTypeKo(type)}</span>
                        })}
                    </div>
                </div>
                <div className={styles.abilities}>
                    <div className={styles.miniTitle} style={{ backgroundColor: getColor(currentPoke?.types[0])}}>특성</div>
                    <div className={styles.mainContents}>
                        { currentPoke?.abilities && currentPoke?.abilities.map((abil, i) => {
                            return <span onClick={() => onAbility(abil)} key={i}>{abil}</span>
                        })}
                    </div>
                </div>
                <div className={styles.status}>
                    <div className={styles.miniTitle} style={{ backgroundColor: getColor(currentPoke.types[0])}}>종족값</div>
                    <div className={styles.mainContents}>
                        { currentPoke?.stats && currentPoke?.stats.map((stat: IStateItem, i: number) => {
                            const backgroudColor = getStatusBarColor(stat.name);
                            return <div className={styles.statusItem} key={i}>
                                <div className={styles.statusTitle} style={{ borderColor: backgroudColor }}>{stat.name}</div>
                                <div className={styles.statusBar} style={{ width: `${stat.name === '총합' ? 200 : stat.stat}px`, backgroundColor: backgroudColor}}>{stat.stat}</div>
                            </div>
                        })}
                    </div>
                </div>
                <b>정보</b>
                <div className={styles.flavor}><div>{currentPoke?.flavor}</div></div>
            </div>
            }
            { currentAbility && <AbilityModal /> }
            { onBookModal && <AddBookModal onCloseBookModal={onCloseBookModal} />}
        </div>
    )
}

export default Detail;