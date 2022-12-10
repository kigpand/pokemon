import styles from './pokemonList.module.scss';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IPokemonList } from '../../interface/IPokemonList';
import { setScrollPoint } from '../../reducers/datas';
import { MouseEvent } from 'react';

interface IPokeMonList {
    pokemon: IPokemonList
}

const PokemonList = ({ pokemon }: IPokeMonList) => {
    const dispatch = useDispatch();
    const nav = useNavigate();

    function onNav(e: MouseEvent<HTMLDivElement>) {
        dispatch(setScrollPoint(e.pageY - 500));
        sessionStorage.setItem('currentPoke', JSON.stringify(pokemon));
        nav('/detail');
    }

    return (
        <div className={styles.list} onClick={(e) => onNav(e)}>
            <div className={styles.num}>No.{pokemon.id}</div>
            <img className={styles.img} src={pokemon.imageUrl} alt={pokemon.name}></img>
            <div className={styles.name}>{pokemon.name}</div>
        </div>
    )
}

export default PokemonList;