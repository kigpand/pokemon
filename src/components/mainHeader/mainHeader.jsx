import styles from './mainHeader.module.scss';
import LOGO from '../../imgs/logo.png';
import { useDispatch } from 'react-redux';
import { setGenerate } from '../../reducers/pokemon';

const MainHeader = () => {

    const dispatch = useDispatch();

    function onGenerate(v) {
        dispatch(setGenerate(v));
    }

    return (
        <div className={styles.mainHeader}>
            <img src={LOGO} className={styles.logo} alt='logo'></img>
            <div className={styles.generateBtn}>세대를 선택하세요</div>
        </div>
    )
}

export default MainHeader;