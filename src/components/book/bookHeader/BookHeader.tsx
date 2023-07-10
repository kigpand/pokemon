import styles from "./BookHeader.module.scss";
import LOGO from "../../../imgs/logo2.png";
import { useNavigate } from "react-router-dom";
import { useBookList } from "../../../hooks/useBookList";
import { AiOutlineRollback } from "react-icons/ai";

const BookHeader = () => {
  const nav = useNavigate();
  const { bookPokeList } = useBookList();

  function onBack() {
    nav(-1);
  }

  return (
    <div className={styles.bookHeader}>
      <img src={LOGO} alt="logo" className={styles.logo}></img>
      <AiOutlineRollback className={styles.back} onClick={onBack} />
      <div className={styles.title}>
        도감 ({bookPokeList.length > 0 && `${bookPokeList.length}/6`})
      </div>
      <div className={styles.line}></div>
    </div>
  );
};

export default BookHeader;
