import styles from "./DetailHeader.module.scss";
import LOGO from "../../../../imgs/logo2.png";
import { useNavigate } from "react-router-dom";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";

const DetailHeader = () => {
  const nav = useNavigate();

  const onHome = () => {
    sessionStorage.removeItem("currentPoke");
    nav(-1);
  };

  return (
    <div className={styles.detailHeader}>
      <img src={LOGO} className={styles.logo} alt="logo"></img>
      <AiOutlineHome className={styles.home} onClick={onHome} />
    </div>
  );
};

export default React.memo(DetailHeader);
