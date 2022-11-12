import styles from './pokemonList.module.scss';
import { useDispatch } from 'react-redux';
import { setCurrentPoke } from '../../reducers/pokemon';
import { useNavigate } from 'react-router-dom';
import { setDataCount } from '../../reducers/datas';
import { IPokemonList } from '../../interface/IPokemonList';
import { useEffect } from 'react';

interface IPokeMonList {
    pokemon: IPokemonList
}

const PokemonList = ({ pokemon }: IPokeMonList) => {
    const dispatch = useDispatch();
    const nav = useNavigate();

    useEffect(() => {
        console.log(pokemon);
    }, [pokemon]);

    function onNav() {
        dispatch(setCurrentPoke(pokemon));
        dispatch(setDataCount(10));
        nav('/detail');
    }

    return (
        <div className={styles.list} onClick={onNav}>
            <div className={styles.num}>No.{pokemon.id}</div>
            <img className={styles.img} src={pokemon.imgUrl} alt={pokemon.species.name}></img>
            <div className={styles.name}>{pokemon.species.name}</div>
        </div>
    )
}

export default PokemonList;