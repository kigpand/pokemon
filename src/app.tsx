import styles from './app.module.scss';
import Main from './container/Main/Main';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPoke, setGenerate, setPokemonList } from './reducers/pokemon';
import { Route, Routes } from 'react-router-dom';
import Detail from './container/Detail/Detail';

function App() {
  const dispatch = useDispatch();

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
    return (() => {
      dispatch(setPokemonList([]));
      dispatch(setGenerate('all'));
      dispatch(setCurrentPoke(null));
      window.localStorage.clear();
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.app} id='app'>
      <Routes>
        <Route path='/' element={<Main /> }></Route>
        <Route path='/detail' element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
