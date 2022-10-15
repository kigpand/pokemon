import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ITypeKoData } from '../../interface/IPokemonList';
import { setTypeLists } from '../../reducers/datas';
import { RootState } from '../../store/store';
import { getTypeConvertData, getTypeKo } from '../../utils/convert';
import { getTypes } from '../../utils/network';
import styles from './Type.module.scss';

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

    async function getTypeData() {
        if (currentType) {
            await getTypes(currentType)
            .then((data: ITypeData[]) => {
                const typeList: ITypeKoData = {
                    id: data[0].id,
                    name: getTypeKo(data[0].name),
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
    }

    return (
        <div className={styles.type}>
            {type?.name}
        </div>
    )
}

export default Type;