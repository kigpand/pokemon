import { getColor, getLineColor } from '../../utils/convert';
import styles from './TypeItem.module.scss';

interface ITypeItem {
    arr: string[];
    title: string;
    type: string;
}

const TypeItem = ({ arr, title, type }: ITypeItem) => {
    return (
        <div className={styles.typeItem}>
            <div className={styles.title}>{title}</div>
                <div className={styles.items} style={{ borderColor: getLineColor(type)}}>
                    {arr.map((item: string, i: number) => {
                        return <span style={{ backgroundColor: getColor(item), borderColor: getLineColor(item)}} key={i}>{item}</span>
                    })}
                </div>
        </div>
    )
}

export default TypeItem;