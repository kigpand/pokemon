import DesktopBook from "../../components/book/desktopBook/DesktopBook";
import MobileBook from "../../components/book/mobileBook/MobileBook";
import styles from "./Books.module.scss";
import { useState, useEffect } from "react";
import BookHeader from "../../components/book/bookHeader/BookHeader";
import BookFooter from "../../components/book/bookFooter/BookFooter";

const Books = () => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    setWidth(window.innerWidth);

    window.addEventListener("resize", Resize);
    return () => {
      window.removeEventListener("resize", Resize);
    };
  }, []);

  function Resize() {
    setWidth(window.innerWidth);
  }

  return (
    <div className={styles.books}>
      <BookHeader />
      {width > 767 ? <DesktopBook /> : <MobileBook />}
      <BookFooter />
    </div>
  );
};

export default Books;
