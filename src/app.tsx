import styles from "./app.module.scss";
import Main from "./page/Main/Main";
import { Route, Routes } from "react-router-dom";
import Detail from "./page/Detail/Detail";
import Type from "./page/Type/Type";
import Books from "./page/Books/Books";

function App() {
  return (
    <div className={styles.app} id="app">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
        <Route path="/type" element={<Type />}></Route>
        <Route path="/books" element={<Books />}></Route>
      </Routes>
    </div>
  );
}

export default App;
