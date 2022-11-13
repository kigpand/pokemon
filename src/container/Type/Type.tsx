import { useDispatch, useSelector } from 'react-redux';
import { setCurrentType } from '../../reducers/datas';
import { RootState } from '../../store/store';
import { getColor } from '../../utils/convert';
import styles from './Type.module.scss';
import TypeItem from './TypeItem';
import { useNavigate } from 'react-router-dom';

const Type = () => {
    const currentType = useSelector((state: RootState) => state.datas.currentType);
    const dispatch = useDispatch();
    const nav = useNavigate();

    function onCloseBtn() {
        nav('/');
        dispatch(setCurrentType(null));
    }

    return (
        <div className={styles.type} onClick={onCloseBtn}>
            { currentType && 
                <div className={styles.container} style={{ borderColor: getColor(currentType.name)}}>
                    <div className={styles.title} style={{ backgroundColor: getColor(currentType.name)}}>{currentType.name}(타입)</div>
                    { currentType.doubleFrom && <TypeItem arr={currentType.doubleFrom} title='2배 데미지 받음' type={currentType.name}/>}
                    { currentType.doubleTo && <TypeItem arr={currentType.doubleTo} title='2배 데미지 줌' type={currentType.name}/>}
                    { currentType.halfFrom && <TypeItem arr={currentType.halfFrom} title='0.5배 데미지 받음' type={currentType.name}/>}
                    { currentType.halfTo && <TypeItem arr={currentType.halfTo} title='0.5배 데미지 줌' type={currentType.name}/>}
                    { currentType.noFrom && <TypeItem arr={currentType.noFrom} title='데미지 받지않음' type={currentType.name}/>}
                    { currentType.noTo && <TypeItem arr={currentType.noTo} title='데미지를 줄수 없음' type={currentType.name}/>}
                </div>
            }
        </div>
    )
}

export default Type;