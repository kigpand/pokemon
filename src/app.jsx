import styles from './app.module.scss';
import Main from './container/Main/Main';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPokemonList } from './reducers/pokemon';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getPokemon().then((v) => {
      dispatch(setPokemonList(v));
    });
  }, [dispatch]);

  async function getPokemon() {
    const item = await axios('http://localhost:4000/pokemon');
    return item.data;
  }

  return (
    <div className={styles.app} id='app'>
        <Main />
    </div>
  );
}

export default App;
