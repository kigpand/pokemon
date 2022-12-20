import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import styles from './Books.module.scss';
import { useEffect } from 'react';

const Books = () => {

    const bookPokeList = useSelector((state: RootState) => state.pokemon.bookPokeList);

    useEffect(() => {
        console.log(bookPokeList);
    }, [bookPokeList]);

    return (
        <div className={styles.books}>도감</div>
    )
}

export default Books;