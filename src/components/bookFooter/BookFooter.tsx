import styles from './BookFooter.module.scss';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { IPokemonList } from '../../interface/IPokemonList';
import { useNavigate } from 'react-router-dom';


interface IBookFoot {
    width: number;
}

const BookFooter = ({ width }: IBookFoot) => {
    const [total, setTotal] = useState<number>(0);
    const [avg, setAvg] = useState<number>(0);
    const bookPokeList = useSelector((state:RootState) => state.pokemon.bookPokeList);
    const nav = useNavigate();

    function onBackBtn() {
        nav('/');
    }

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

    return (
        <div className={styles.bookFooter}>
            { bookPokeList.length > 0 
            ? <div className={styles.totalData}>
                <div>평균 종족치: {avg}</div>
                <div>총 종족치: {total}</div>
                </div>
            : <div className={styles.noting}>도감에 저장된 포켓몬이 없습니다.</div>}
            { width <= 767 && <div className={styles.back} onClick={onBackBtn}>&lt; 뒤로가기</div>}
        </div>
    )
}

export default BookFooter;