import styles from "./app.module.scss";
import Main from "./page/Main/Main";
import { Route, Routes } from "react-router-dom";
import Detail from "./page/Detail/Detail";
import Type from "./page/Type/Type";
import Books from "./page/Books/Books";
import { GlobalStyle } from "./styles/globalstyles";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

function App() {
  const theme = useSelector((state: RootState) => state.datas.theme);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div className={styles.app} id="app">
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
          <Route path="/type" element={<Type />}></Route>
          <Route path="/books" element={<Books />}></Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
