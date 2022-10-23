import styles from './app.module.scss';
import Main from './container/Main/Main';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPoke, setPokemonList } from './reducers/pokemon';
import { Route, Routes } from 'react-router-dom';
import Detail from './container/Detail/Detail';
import { getPokemon } from './utils/network';
import Type from './container/Type/Type';
import { setCurrentType } from './reducers/datas';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (sessionStorage.getItem('pokeList')) {
      const pokeList = JSON.parse(sessionStorage.getItem('pokeList')!);
      dispatch(setPokemonList(pokeList));
    } else {
      getPokemon().then((v) => {
        sessionStorage.setItem('pokeList', JSON.stringify(v));
        dispatch(setPokemonList(v));
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem('currentPoke')) {
      const json = JSON.parse(sessionStorage.getItem('currentPoke')!);
      dispatch(setCurrentPoke(json));
    }

    if (sessionStorage.getItem('currentType')) {
      dispatch(setCurrentType(sessionStorage.getItem('currentType')));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.app} id='app'>
      <Routes>
        <Route path='/' element={<Main /> }></Route>
        <Route path='/detail' element={<Detail />}></Route>
        <Route path='/type' element={<Type />}></Route>
      </Routes>
    </div>
  );
}

export default App;
