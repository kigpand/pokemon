import { useEffect } from 'react';
import styles from './app.module.scss';
import Main from './container/Main/Main';

function App() {

  useEffect(() => {
    getPokemon().then((v) => {
      console.log(v);
    });
  }, []);

  async function getPokemon() {
    const item = await fetch('https://pokeapi.co/api/v2/pokemon/1/');
    return item;
  }

  return (
    <div className={styles.app}>
      <Main />
    </div>
  );
}

export default App;
