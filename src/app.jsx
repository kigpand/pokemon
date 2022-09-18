import styles from './app.module.scss';
import Main from './container/Main/Main';

function App() {

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
        <Main />
    </div>
  );
}

export default App;
