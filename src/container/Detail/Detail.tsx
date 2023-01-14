import { useDispatch, useSelector } from 'react-redux';
import styles from './detail.module.scss';
import { RootState } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import { setCurrentAbility } from '../../reducers/datas';
import { getColor, getTypeKo } from '../../utils/convert';
import AbilityModal from '../../components/abilityModal/AbilityModal';
import { useEffect, useState } from 'react';
import AddBookModal from '../../components/addBookModal/AddBookModal';
import { IPokemonList } from '../../interface/IPokemonList';
import { setBookPokeList } from '../../reducers/pokemon';
import ADDBTN from '../../imgs/addBtn.png';
import QUESTION from '../../imgs/question.png';

interface IStateItem {
    name: string;
    stat: string | number;
}

interface IBackgroundColor {
    [index: string]: string; // 이렇게 한 줄만 써주면 된다
    'HP': string;
    '공격': string;
    '방어': string;
    '특수공격': string;
    '특수방어': string;
    '스피드': string;
  }

const Detail = () => {

    const [currentPoke, setCurrentPoke] = useState<IPokemonList>();
    const currentAbility = useSelector((state: RootState) => state.datas.currentAbility);
    const bookPokeList = useSelector((state: RootState) => state.pokemon.bookPokeList);
    const [onBookModal, setOnBookModal] = useState<Boolean>(false);
    const nav = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const item = sessionStorage.getItem('currentPoke');
        if (item) {
            const poke = JSON.parse(item);
            setCurrentPoke(poke);
        }

    }, []);

    function onCloseBtn() {
        sessionStorage.removeItem('currentPoke');
        nav('/');
    }

    function onTypeClick(type: string) {
        sessionStorage.setItem('type', type);
        nav('/type');
    }

    function onAbility(ability: string) {
        dispatch(setCurrentAbility(ability));
    }

    function getStatusBarColor(name: string) {
        const backgroundColor: IBackgroundColor = {
            'HP': 'red',
            '공격': 'orange',
            '방어': 'blue',
            '특수공격': 'pink',
            '특수방어': 'purple',
            '스피드': 'green',
            '총합': ''
        }

        return backgroundColor[name];
    }

    function onCloseBookModal() {
        setOnBookModal(false);
    }

    function addPokeBook() {
        if (currentPoke) {
            const result = bookPokeList.find((pokeList: IPokemonList) => pokeList.id === currentPoke.id);
            if (result) {
                alert('이미 도감에 등록된 포켓몬입니다.');
                return;
            }
            dispatch(setBookPokeList(currentPoke));
            setOnBookModal(true);
        }
    }

    return (
        <div className={styles.detail} >
            {currentPoke && currentPoke.types
            &&
            <div className={styles.container} style={{ borderColor: getColor(currentPoke.types[0])}}>
                <img src={ADDBTN} alt='추가버튼' className={styles.addBookBtn} onClick={addPokeBook}></img>
                <div className={styles.closeBtn} style={{ borderColor: getColor(currentPoke?.types[0]), color: getColor(currentPoke?.types[0])}} onClick={onCloseBtn}>X</div>
                <div className={styles.num}>No.{currentPoke?.id} {currentPoke.name}</div>
                <div className={styles.generate} style={{ borderColor: getColor(currentPoke?.types[0])} }>{currentPoke.generate}</div>
                <img src={currentPoke.imageUrl} alt={currentPoke.name} className={styles.img}></img>
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
                            return <span onClick={() => onAbility(abil)} key={i}>{abil}<img src={QUESTION} alt='question' /></span>
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
                <b style={{ paddingLeft: '5px'}}>정보</b>
                <div className={styles.flavor}><div>{currentPoke?.flavor}</div></div>
            </div>
            }
            { currentAbility && <AbilityModal /> }
            { onBookModal && <AddBookModal onCloseBookModal={onCloseBookModal} />}
        </div>
    )
}

export default Detail;