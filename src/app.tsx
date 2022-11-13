import styles from './app.module.scss';
import Main from './container/Main/Main';
import { Route, Routes } from 'react-router-dom';
import Detail from './container/Detail/Detail';
import Type from './container/Type/Type';

function App() {

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
