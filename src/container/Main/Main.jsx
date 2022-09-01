import MainBody from '../../components/mainBody/mainBody';
import MainHeader from '../../components/mainHeader/mainHeader';
import styles from './Main.module.scss';

const Main = () => {
    return (
        <div className={styles.main}>
            <MainHeader />
            <MainBody />
        </div>
    )
}

export default Main;