import styles from './mainHeader.module.scss';
import LOGO from '../../imgs/logo.png';
import { useDispatch } from 'react-redux';
import { setGenerate } from '../../reducers/pokemon';
import { useState } from 'react';

const MainHeader = () => {

    const dispatch = useDispatch();
    const [isGene, setIsGene] = useState(false);
    const generateList = ['1세대', '2세대', '3세대', '4세대', '5세대', '6세대', '7세대', '8세대'];

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
        </div>
    )
}

export default MainHeader;