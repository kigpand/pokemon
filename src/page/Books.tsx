import DesktopBook from "../components/book/DesktopBook";
import MobileBook from "../components/book/MobileBook";
import { useState, useEffect } from "react";
import BookHeader from "../components/book/BookHeader";
import BookFooter from "../components/book/BookFooter";
import styled from "styled-components";

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
    <BookWrapper>
      <BookHeader />
      {width > 767 ? <DesktopBook /> : <MobileBook />}
      <BookFooter />
    </BookWrapper>
  );
};

export default Books;

const BookWrapper = styled.section`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
