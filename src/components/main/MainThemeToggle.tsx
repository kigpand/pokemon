import SUN from "imgs/sun.png";
import MOON from "imgs/moon.png";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/store";
import { setTheme } from "reducers/datas";
import { mobileWidth } from "styles/globalstyles";

export default function MainThemeToggle() {
  const theme = useSelector((state: RootState) => state.datas.theme);
  const dispatch = useDispatch();

  function handleChangeTheme() {
    dispatch(setTheme(theme === "dark" ? "light" : "dark"));
  }

  return (
    <ThemeToggleWrapper
      src={theme === "light" ? MOON : SUN}
      alt="img"
      onClick={handleChangeTheme}
      theme={theme}
    />
  );
}

const ThemeToggleWrapper = styled.img<{ theme: string }>`
  position: absolute;
  font-size: 30px;
  top: 1rem;
  right: 3.8rem;
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 5px;
  height: 30px;
  background-color: ${(props) => (props.theme === "light" ? "black" : "white")};
  object-fit: contain;
  cursor: pointer;

  @media only screen and (max-width: ${mobileWidth}) {
    right: 3.1rem;
    height: 20px;
  }
`;
