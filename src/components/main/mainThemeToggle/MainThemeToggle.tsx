import styles from "./MainThemeToggle.module.scss";
import SUN from "../../../imgs/sun.png";
import MOON from "../../../imgs/moon.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { setTheme } from "../../../reducers/datas";

export default function MainThemeToggle() {
  const theme = useSelector((state: RootState) => state.datas.theme);
  const dispatch = useDispatch();

  function handleChangeTheme() {
    dispatch(setTheme(theme === "dark" ? "light" : "dark"));
  }

  return (
    <img
      src={theme === "light" ? MOON : SUN}
      alt="img"
      style={{ backgroundColor: theme === "light" ? "black" : "white" }}
      className={styles.themeToggle}
      onClick={handleChangeTheme}
    />
  );
}
