import styles from './mainHeader.module.scss';
import LOGO from '../../imgs/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPoke, setGenerate } from '../../reducers/pokemon';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MainHeader = () => {

    const searchRef = useRef();
    const dispatch = useDispatch();
    const [isGene, setIsGene] = useState(false);
    const generateList = ['1세대', '2세대', '3세대', '4세대', '5세대', '6세대', '7세대', '8세대'];
    const pokemonList = useSelector((state) => state.pokemon.pokemonList);
    const nav = useNavigate();

    function onGenerate(v) {
        setIsGene(false);
        dispatch(setGenerate(v));
    }

    function onGenerateBtn() {
        setIsGene(true);
    }

    function onGenerateAll() {
        setIsGene(false);
        dispatch(setGenerate('all'));
    }

    function onSearchItem(e) {
        if (e.key === 'Enter') {
            const list = pokemonList.find((v) => v.name === searchRef.current.value);
            if (list?.name) {
                dispatch(setCurrentPoke(list));
                nav('/detail');
            } else {
                dispatch(setCurrentPoke(null));
            }
            searchRef.current.value = '';
        }
    }

    return (
        <div className={styles.mainHeader}>
            <img src={LOGO} className={styles.logo} alt='logo'></img>
            {isGene 
            ? <div className={styles.generateList}>
                <div className={styles.listHeader}>세대를 선택하세요</div>
                <div className={styles.listItems}>
                    <div className={styles.listItem} onClick={onGenerateAll}>전 세대 보기</div>
                    { generateList.map((v) => {
                        return <div className={styles.listItem} key={v} onClick={() => onGenerate(v)}>{v}</div>
                    })}
                </div>
            </div>
            :<div className={styles.generateBtn} onClick={onGenerateBtn}>세대를 선택하세요</div>}
            <input type='text' className={styles.search} ref={searchRef} placeholder='검색...' onKeyDown={onSearchItem}></input>
        </div>
    )
}

export default MainHeader;