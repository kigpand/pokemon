import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ITypeKoData } from '../../interface/IPokemonList';
import { setTypeLists } from '../../reducers/datas';
import { RootState } from '../../store/store';
import { getColor, getTypeConvertData, getTypeKo } from '../../utils/convert';
import { getTypes } from '../../utils/network';
import styles from './Type.module.scss';
import { useCallback } from 'react';

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

    useEffect(() => {
        console.log(type);
    }, [type]);

    return (
        <div className={styles.type}>
            { type && 
                <div className={styles.container} style={{ backgroundColor: getColor(type.name)}}>
                    {getTypeKo(type?.name)}
                    <div className={styles.doubleDamegeFrom}>
                        <div className={styles.title}>2배 데미지</div>
                        <div className={styles.items}>
                            {type.doubleDamegeFrom?.map((item: string, i: number) => {
                                return <span key={i}>{item}</span>
                            })}
                        </div>
                    </div>
                    <div className={styles.doubleDamegeTo}>
                        <div className={styles.title}>2배 준다</div>
                        <div className={styles.items}>
                            {type.doubleDamegeTo?.map((item: string, i: number) => {
                                return <span key={i}>{item}</span>
                            })}
                        </div>
                    </div>
                    <div className={styles.halfDamegeFrom}>
                        <div className={styles.title}>절반 데미지</div>
                        <div className={styles.items}>
                            {type.halfDamegeFrom?.map((item: string, i: number) => {
                                return <span key={i}>{item}</span>
                            })}
                        </div>
                    </div>
                    <div className={styles.halfDamegeTo}>
                        <div className={styles.title}>절반 데미지를 준다</div>
                        <div className={styles.items}>
                            {type.halfDamegeTo?.map((item: string, i: number) => {
                                return <span key={i}>{item}</span>
                            })}
                        </div>
                    </div>
                    <div className={styles.noDamegeFrom}>
                        <div className={styles.title}>데미지를 줄수 없다</div>
                        <div className={styles.items}>
                            {type.noDamegeFrom?.map((item: string, i: number) => {
                                return <span key={i}>{item}</span>
                            })}
                        </div>
                    </div>
                    <div className={styles.noDamegeTo}>
                        <div className={styles.title}>데미지를 받지 않는다</div>
                        <div className={styles.items}>
                            {type.noDamegeTo?.map((item: string, i: number) => {
                                return <span key={i}>{item}</span>
                            })}
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Type;