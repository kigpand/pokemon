import Main from "./page/Main";
import { Navigate, Route, Routes } from "react-router-dom";
import Detail from "./page/Detail";
import Type from "./page/Type";
import Books from "./page/Books";
import { GlobalStyle } from "./styles/globalstyles";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import Default from "page/Default";

function App() {
  const theme = useSelector((state: RootState) => state.datas.theme);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <AppWrapper id="app">
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
          <Route path="/type" element={<Type />}></Route>
          <Route path="/books" element={<Books />}></Route>
          <Route path="/default" element={<Default />} />
          <Route path="*" element={<Navigate to="/default" />} />
        </Routes>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;

const AppWrapper = styled.main`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
