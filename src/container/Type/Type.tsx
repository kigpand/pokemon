import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ITypeKoData } from '../../interface/IPokemonList';
import { setTypeLists } from '../../reducers/datas';
import { RootState } from '../../store/store';
import { getColor, getTypeConvertData, getTypeKo } from '../../utils/convert';
import { getTypes } from '../../utils/network';
import styles from './Type.module.scss';
import { useCallback } from 'react';
import TypeItem from './TypeItem';
import { useNavigate } from 'react-router-dom';

interface ITypeData {
    id: number;
    name: string;
    doubleDamegeFrom: string;
    doubleDamegeTo: string;
    halfDamegeFrom: string;
    halfDamegeTo: string;
    noDamegeFrom: string;
    noDamegeTo: string;
}

const Type = () => {
    const currentType = useSelector((state: RootState) => state.datas.currentType);
    const typeLists = useSelector((state: RootState) => state.datas.typeLists);
    const dispatch = useDispatch();
    const [type, setType] = useState<ITypeKoData | null>(null);
    const nav = useNavigate();

    useEffect(() => {
        if (currentType) {
            const result = typeLists.find((type: ITypeKoData) => type.name === getTypeKo(currentType));
            if (result) {
                setType(result);
            } else {
                getTypeData();
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentType]);

    const getTypeData = useCallback(async () => {
        if (currentType) {
            await getTypes(currentType)
            .then((data: ITypeData[]) => {
                const typeList: ITypeKoData = {
                    id: data[0].id,
                    name: data[0].name,
                    doubleDamegeFrom: getTypeConvertData(data[0].doubleDamegeFrom),
                    doubleDamegeTo: getTypeConvertData(data[0].doubleDamegeTo),
                    halfDamegeFrom: getTypeConvertData(data[0].halfDamegeFrom),
                    halfDamegeTo: getTypeConvertData(data[0].halfDamegeTo),
                    noDamegeFrom: getTypeConvertData(data[0].noDamegeFrom),
                    noDamegeTo: getTypeConvertData(data[0].noDamegeTo)
                }
                dispatch(setTypeLists(typeList));
                setType(typeList);
            });
        }
    }, [currentType, dispatch]);

    function onCloseBtn() {
        nav('/');
        setType(null);
        dispatch(setTypeLists([]))
    }

    return (
        <div className={styles.type}>
            <div className={styles.closeBtn} onClick={onCloseBtn}>X</div>
            { type && 
                <div className={styles.container} style={{ backgroundColor: getColor(type.name)}}>
                    {getTypeKo(type?.name)}
                    { type.doubleDamegeFrom && <TypeItem arr={type.doubleDamegeFrom} title='2배 데미지 받음'/>}
                    { type.doubleDamegeTo && <TypeItem arr={type.doubleDamegeTo} title='2배 데미지 줌'/>}
                    { type.halfDamegeFrom && <TypeItem arr={type.halfDamegeFrom} title='0.5배 데미지 받음'/>}
                    { type.halfDamegeTo && <TypeItem arr={type.halfDamegeTo} title='0.5배 데미지 줌'/>}
                    { type.noDamegeFrom && <TypeItem arr={type.noDamegeFrom} title='데미지 받지않음'/>}
                    { type.noDamegeTo && <TypeItem arr={type.noDamegeTo} title='데미지를 줄수 없음'/>}
                </div>
            }
        </div>
    )
}

export default Type;