import { useNavigate } from 'react-router-dom';
import { IPokemonList } from '../../interface/IPokemonList';
import styles from './BookList.module.scss';

interface IBookList {
    list: IPokemonList
}
const BookList = (item: IBookList) => {

    const nav = useNavigate();

    function onDetail() {
        sessionStorage.setItem('currentPoke', JSON.stringify(item.list));
        nav('/detail');
    }

    return (
        <div className={styles.bookList} onClick={onDetail}>
            <div className={styles.id}>No.{item.list.id}</div>
            <div className={styles.name}>{item.list.name}</div>
            <div className={styles.total}>총합: {item.list.stats[6].stat}</div>
        </div>
    )
}

export default BookList;