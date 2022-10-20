import { getColor } from '../../utils/convert';
import styles from './TypeItem.module.scss';

interface ITypeItem {
    arr: string[];
    title: string;
}

const TypeItem = ({ arr, title }: ITypeItem) => {
    return (
        <div className={styles.typeItem}>
            <div className={styles.title}>{title}</div>
                <div className={styles.items}>
                    {arr.map((item: string, i: number) => {
                        return <span style={{ backgroundColor: getColor(item)}} key={i}>{item}</span>
                    })}
                </div>
        </div>
    )
}

export default TypeItem;