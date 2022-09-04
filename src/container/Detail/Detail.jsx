import { useSelector } from 'react-redux';
import styles from './Detail.module.scss';

const Detail = () => {

    const currentPoke = useSelector((state) => state.pokemon.currentPoke);

    return (
        <div className={styles.detail}>
            {currentPoke && currentPoke.name}
        </div>
    )
}

export default Detail;