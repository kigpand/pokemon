import styles from './pokemonList.module.scss';
import { useDispatch } from 'react-redux';
import { setCurrentPoke } from '../../reducers/pokemon';
import { useNavigate } from 'react-router-dom';
import { IPokemonList } from '../../interface/IPokemonList';
import { setScrollPoint } from '../../reducers/datas';

interface IPokeMonList {
    pokemon: IPokemonList
}

const PokemonList = ({ pokemon }: IPokeMonList) => {
    const dispatch = useDispatch();
    const nav = useNavigate();

    function onNav(e: any) {
        dispatch(setCurrentPoke(pokemon));
        dispatch(setScrollPoint(e.pageY));
        nav('/detail');
    }

    return (
        <div className={styles.list} onClick={(e) => onNav(e)}>
            <div className={styles.num}>No.{pokemon.id}</div>
            <img className={styles.img} src={pokemon.imgUrl} alt={pokemon.species.name}></img>
            <div className={styles.name}>{pokemon.species.name}</div>
        </div>
    )
}

export default PokemonList;