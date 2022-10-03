import styles from './app.module.scss';
import Main from './container/Main/Main';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPoke, setGenerate, setPokemonList } from './reducers/pokemon';

function App() {
  const dispatch = useDispatch();
  const currentPoke = useSelector((state) => state.pokemon.currentPoke);

  useEffect(() => {
    getPokemon().then((v) => {
      dispatch(setPokemonList(v));
    });
  }, [dispatch]);

  async function getPokemon() {
    try {
      const item = await axios('http://localhost:4000/pokemon');
      return item.data;
    } catch(e) {
      console.error(e);
      return [];
    }
  }

  useEffect(() => {
    if (currentPoke.id) {
      document.getElementById('app').style.overflowY = 'hidden';
    }

    return (() => {
      dispatch(setPokemonList([]));
      dispatch(setGenerate('all'));
      dispatch(setCurrentPoke(null));
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.app} id='app'>
        <Main />
    </div>
  );
}

export default App;
