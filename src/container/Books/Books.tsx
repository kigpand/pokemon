import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import styles from './Books.module.scss';
import { useEffect } from 'react';
import LOGO from '../../imgs/logo2.png';
import { IPokemonList } from '../../interface/IPokemonList';
import BookList from '../../components/bookList/BookLIst';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Books = () => {

    const bookPokeList = useSelector((state: RootState) => state.pokemon.bookPokeList);
    const [total, setTotal] = useState<number>(0);
    const [avg, setAvg] = useState<number>(0);
    const nav = useNavigate();

    useEffect(() => {
        if (bookPokeList.length > 0) {
            let totalData: number = 0;
            bookPokeList.forEach((pokeList: IPokemonList) => {
                totalData += pokeList.stats[6].stat;
            });

            setTotal(totalData);
            setAvg(Math.ceil(totalData / bookPokeList.length));
        }
    }, [bookPokeList]);

    function onBackBtn() {
        nav('/');
    }

    return (
        <div className={styles.books}>
            <img src={LOGO} alt='logo' className={styles.logo}></img>
            <div className={styles.title}>도감   ({bookPokeList.length > 0 && `${bookPokeList.length}/6`})</div>
            <div className={styles.line}></div>
            { bookPokeList.length > 0 && bookPokeList.map((pokeList: IPokemonList) => {
                return <BookList key={pokeList.id} list={pokeList} />
            })}
            { bookPokeList.length > 0 
            ? <div className={styles.totalData}>
                <div>평균 종족치: {avg}</div>
                <div>총 종족치: {total}</div>
                </div>
            : <div className={styles.noting}>도감에 저장된 포켓몬이 없습니다.</div>}
            <div className={styles.back} onClick={onBackBtn}>&lt; 뒤로가기</div>
        </div>
    )
}

export default Books;