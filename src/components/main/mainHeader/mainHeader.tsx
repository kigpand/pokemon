import styles from "./mainHeader.module.scss";
import LOGO from "../../../imgs/logo2.png";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { KeyboardEvent } from "react";
import { convertOnePoke } from "../../../utils/makeData";
import SortModal from "../../modal/sortModal/SortModal";
import list from "../../../json/pokemonList.json";
import { useState } from "react";
import { BsFilterRight } from "react-icons/bs";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import MainType from "../mainType/MainType";

const MainHeader = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const [onSortModal, setOnSortModal] = useState<Boolean>(false);
  const nav = useNavigate();

  function onSearchItem(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      const isNaN = Number.isNaN(Number(searchRef.current!.value));
      const item = isNaN
        ? list.find((item) => item.name === searchRef.current?.value)
        : list.find((item) => item.id === Number(searchRef.current?.value));
      if (item) {
        const pokemon = convertOnePoke(item);
        sessionStorage.setItem("currentPoke", JSON.stringify(pokemon));
        nav("/detail");
      } else {
        alert("올바른 도감번호를 입력해주세요.");
      }

      searchRef.current!.value = "";
    }
  }

  function moveToBook() {
    nav("/books");
  }

  return (
    <div className={styles.mainHeader}>
      <MainType />
      <img src={LOGO} className={styles.logo} alt="logo"></img>
      <input
        type="text"
        className={styles.search}
        ref={searchRef}
        placeholder="도감번호나 이름을 입력해주세요"
        onKeyDown={onSearchItem}
      ></input>
      <BsFilterRight
        className={styles.sort}
        onClick={() => setOnSortModal(true)}
      />
      <BsFillBookmarkPlusFill className={styles.book} onClick={moveToBook} />
      {onSortModal && <SortModal closeSort={() => setOnSortModal(false)} />}
    </div>
  );
};

export default MainHeader;
