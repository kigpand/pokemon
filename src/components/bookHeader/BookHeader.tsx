import styles from './BookHeader.module.scss';
import LOGO from '../../imgs/logo2.png';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
const BookHeader = () => {

    const bookPokeList = useSelector((state:RootState) => state.pokemon.bookPokeList);

    return (
        <div className={styles.bookHeader}>
            <img src={LOGO} alt='logo' className={styles.logo}></img>
            <div className={styles.title}>도감   ({bookPokeList.length > 0 && `${bookPokeList.length}/6`})</div>
            <div className={styles.line}></div>
        </div>
    )
}

export default BookHeader;