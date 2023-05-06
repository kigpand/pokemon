import styles from "./BookHeader.module.scss";
import LOGO from "../../../imgs/logo2.png";
import BACK from "../../../imgs/back.png";
import { useNavigate } from "react-router-dom";
import { useBookList } from "../../../hooks/useBookList";

const BookHeader = () => {
  const nav = useNavigate();
  const { bookPokeList } = useBookList();

  function onBack() {
    nav(-1);
  }

  return (
    <div className={styles.bookHeader}>
      <img src={LOGO} alt="logo" className={styles.logo}></img>
      <img src={BACK} alt="back" className={styles.back} onClick={onBack}></img>
      <div className={styles.title}>
        도감 ({bookPokeList.length > 0 && `${bookPokeList.length}/6`})
      </div>
      <div className={styles.line}></div>
    </div>
  );
};

export default BookHeader;
