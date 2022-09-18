import { useSelector } from 'react-redux';
import MainBody from '../../components/mainBody/mainBody';
import MainHeader from '../../components/mainHeader/mainHeader';
import Detail from '../Detail/Detail';
import styles from './Main.module.scss';

const Main = () => {

    const currentPoke = useSelector((state) => state.pokemon.currentPoke);

    return (
        <div className={styles.main}>
            { currentPoke.id && <Detail />}
            <MainHeader />
            <MainBody />
        </div>
    )
}

export default Main;