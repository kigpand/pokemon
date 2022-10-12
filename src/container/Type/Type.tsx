import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { getTypes } from '../../utils/network';
import styles from './Type.module.scss';

const Type = () => {

    const currentType = useSelector((state: RootState) => state.datas.type);
    const [typeList, setTypeList] = useState<any>([]);
    const [typeData, setTypeData] = useState({
        title: ''
    });

    useEffect(() => {
        if (currentType !== null) {
            const result: any = typeList.find((type: any) => type.title === currentType);
            if (result) {
                setTypeData({...result});
            } else {
                getTypeData();
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [typeList, currentType]);

    async function getTypeData() {
        await getTypes(currentType)
        .then((data: any) => {
            setTypeData({...data});
            setTypeList([...typeList, data]);
        });
    }

    return (
        <div className={styles.type}>
            {typeData.title}
        </div>
    )
}

export default Type;