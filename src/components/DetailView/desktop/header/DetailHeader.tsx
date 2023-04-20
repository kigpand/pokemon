import styles from "./DetailHeader.module.scss";
import LOGO from "../../../../imgs/logo2.png";
import HOME from "../../../../imgs/home.png";
import { useNavigate } from "react-router-dom";
import React from "react";

const DetailHeader = () => {
  const nav = useNavigate();

  const onHome = () => {
    sessionStorage.removeItem("currentPoke");
    nav(-1);
  };

  return (
    <div className={styles.detailHeader}>
      <img src={LOGO} className={styles.logo} alt="logo"></img>
      <img src={HOME} className={styles.home} alt="home" onClick={onHome}></img>
    </div>
  );
};

export default React.memo(DetailHeader);
