import { useEffect } from 'react';
import styles from './app.module.scss';
import Main from './container/Main/Main';
import { useDispatch } from 'react-redux';
import { setCurrentPoke } from './reducers/pokemon';
import axios from 'axios';
import { Routes, Route } from "react-router-dom";
import Detail from './container/Detail/Detail';

function App() {

  const dispatch = useDispatch();

  // useEffect(() => {
  //   getPokemon().then((v) => {
  //     dispatch(setCurrentPoke(v));
  //   });
  // }, []);

  // async function getPokemon() {
  //   const item = await axios('https://pokeapi.co/api/v2/pokemon/1/');
  //   return item.data;
  // }

  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/detail' element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
