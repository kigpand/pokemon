import { getColor, typeConvertDamegeData } from '../../utils/convert';
import styles from './Type.module.scss';
import TypeItem from './TypeItem';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import types from '../../json/types.json';
import { IType } from '../../interface/IType';

const Type = () => {
    const nav = useNavigate();
    const [typeData, setTypeData] = useState<IType>();

    function onCloseBtn() {
        nav('/');
        sessionStorage.removeItem('type');
        sessionStorage.removeItem('currentPoke');
    }

    useEffect(() => {
        const sessionType = sessionStorage.getItem('type');
        if (sessionType) {
            const type = types.find((type) => type.name === sessionType);
            if (type) {
                setTypeData(typeConvertDamegeData(type));
            }
        }
    }, []);

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