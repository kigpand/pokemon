import { useDispatch, useSelector } from 'react-redux';
import { setCurrentAbility } from '../../reducers/datas';
import { RootState } from '../../store/store';
import styles from './AbilityModal.module.scss';

const AbilityModal = () => {

    const currentAbility = useSelector((state: RootState) => state.datas.currentAbility);
    const dispatch = useDispatch();

    function onCloseAbility() {
        dispatch(setCurrentAbility(null));
    }

    return (
        <div className={styles.abilityModal}>
            <div className={styles.main}>
                <div className={styles.title}>{currentAbility?.name}</div>
                <div className={styles.line}></div>
                <div className={styles.content}>{currentAbility?.flavor}</div>
            </div>
            <div className={styles.back} onClick={onCloseAbility}></div>
        </div>
    )
}

export default AbilityModal;