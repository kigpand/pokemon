import { useDispatch, useSelector } from 'react-redux';
import { setCurrentType } from '../../reducers/datas';
import { RootState } from '../../store/store';
import { getColor, getTypeConvertData, typeConvertDamegeData } from '../../utils/convert';
import styles from './Type.module.scss';
import TypeItem from './TypeItem';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getPokeType } from '../../utils/network';
import { useState } from 'react';

const Type = () => {
    const currentType = useSelector((state: RootState) => state.datas.currentType);
    const dispatch = useDispatch();
    const nav = useNavigate();
    const [typeData, setTypeData] = useState<any>();

    function onCloseBtn() {
        nav('/');
        dispatch(setCurrentType(null));
    }

    useEffect(() => {
        if (currentType) {
            getPokeType(currentType).then((v) => {
                setTypeData(typeConvertDamegeData(v[0]));
            })
        }
    }, [currentType]);

    return (
        <div className={styles.type} onClick={onCloseBtn}>
            { typeData && 
                <div className={styles.container} style={{ borderColor: getColor(typeData.name)}}>
                    <div className={styles.title} style={{ backgroundColor: getColor(typeData.name)}}>{typeData.name}(타입)</div>
                    { typeData.doubleFrom && <TypeItem arr={typeData.doubleFrom} title='2배 데미지 받음' type={typeData.name}/>}
                    { typeData.doubleTo && <TypeItem arr={typeData.doubleTo} title='2배 데미지 줌' type={typeData.name}/>}
                    { typeData.halfFrom && <TypeItem arr={typeData.halfFrom} title='0.5배 데미지 받음' type={typeData.name}/>}
                    { typeData.halfTo && <TypeItem arr={typeData.halfTo} title='0.5배 데미지 줌' type={typeData.name}/>}
                    { typeData.noFrom && <TypeItem arr={typeData.noFrom} title='데미지 받지않음' type={typeData.name}/>}
                    { typeData.noTo && <TypeItem arr={typeData.noTo} title='데미지를 줄수 없음' type={typeData.name}/>}
                </div>
            }
        </div>
    )
}

export default Type;