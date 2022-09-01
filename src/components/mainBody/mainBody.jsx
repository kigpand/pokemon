import { useSelector } from 'react-redux';
import styles from './mainBody.module.scss';

const MainBody = () => {

    const currentPoke = useSelector((state) => state.reducer.currentPoke);

    return(
        <div className={styles.mainBody}>
            <div className={styles.name}>{currentPoke.name}</div>
        </div>
    )
}

export default MainBody;