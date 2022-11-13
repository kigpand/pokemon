import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPoke } from '../../reducers/pokemon';
import styles from './detail.module.scss';
import { RootState } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import { setCurrentType } from '../../reducers/datas';
import { getColor } from '../../utils/convert';

interface IStateItem {
    name: string;
    stat: string | number;
}

const Detail = () => {

    const currentPoke = useSelector((state: RootState) => state.pokemon.currentPoke);
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

    function onAbility(ability: any) {
        alert(ability.flavor);
    }

    return (
        <div className={styles.detail} >
            <div className={styles.container} style={{ borderColor: getColor(currentPoke?.types[0].name!)}}>
                <div className={styles.closeBtn} style={{ borderColor: getColor(currentPoke?.types[0].name!), color: getColor(currentPoke?.types[0].name!)}} onClick={onCloseBtn}>X</div>
                <div className={styles.num}>No.{currentPoke?.id} {currentPoke?.species.name}</div>
                <div className={styles.generate} style={{ borderColor: getColor(currentPoke?.types[0].name!)} }>{currentPoke?.species.generation}세대</div>
                <img src={currentPoke?.imgUrl} alt={currentPoke?.species.name} className={styles.img}></img>
                <div></div>
                <div className={styles.genus}>
                    <div className={styles.miniTitle} style={{ backgroundColor: getColor(currentPoke?.types[0].name!)}}>분류</div>
                    <div className={styles.mainContents}>
                        <span>{currentPoke?.species.genus}</span>
                    </div>
                </div>
                <div className={styles.types}>
                    <div className={styles.miniTitle} style={{ backgroundColor: getColor(currentPoke?.types[0].name!)}}>타입</div>
                    <div className={styles.mainContents}>
                        { currentPoke?.types && currentPoke?.types.map((type, i) => {
                            return <span key={i} className={styles.type} style={{backgroundColor: getColor(type.name)}} onClick={() => onTypeClick(type.name)}>{type.name}</span>
                        })}
                    </div>
                </div>
                <div className={styles.abilities}>
                    <div className={styles.miniTitle} style={{ backgroundColor: getColor(currentPoke?.types[0].name!)}}>특성</div>
                    <div className={styles.mainContents}>
                        { currentPoke?.abilities && currentPoke?.abilities.map((abil, i) => {
                            return <span onClick={() => onAbility(abil)} key={i}>{abil.name}</span>
                        })}
                    </div>
                </div>
                <div className={styles.status}>
                    <div className={styles.miniTitle} style={{ backgroundColor: getColor(currentPoke?.types[0].name!)}}>종족값</div>
                    <div className={styles.mainContents}>
                        { currentPoke?.stats && currentPoke?.stats.map((stat: IStateItem, i: number) => {
                            return <div className={styles.statusItem} key={i}><div>{stat.name}</div>: {stat.stat}</div>
                        })}
                    </div>
                </div>
                <b>정보</b>
                <div className={styles.flavor}><div>{currentPoke?.species.flavor[0]}</div></div>
            </div>
        </div>
    )
}

export default Detail;