import styles from "./mainHeader.module.scss";
import LOGO from "../../../imgs/logo.png";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { KeyboardEvent } from "react";
import { onSearchItem } from "../../../utils/makeData";
import SortModal from "../../modal/sortModal/SortModal";
import { useState } from "react";
import { BsFilterRight } from "react-icons/bs";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import MainType from "../mainType/MainType";
import { IPokemonList } from "../../../interface/IPokemonList";
import MainThemeToggle from "../mainThemeToggle/MainThemeToggle";

const MainHeader = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const [onSortModal, setOnSortModal] = useState<Boolean>(false);
  const nav = useNavigate();

  function setPokeItem(poke: IPokemonList) {
    sessionStorage.setItem("currentPoke", JSON.stringify(poke));
    nav("/detail");
  }

  function onSearch(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      onSearchItem(searchRef, setPokeItem);
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
        onKeyDown={onSearch}
      ></input>
      <MainThemeToggle />
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
