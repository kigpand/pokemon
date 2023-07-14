import { useNavigate } from "react-router-dom";
import {
  getColor,
  getTypeEn,
  getTypeIcon,
  typeConvertDamegeData,
} from "../../../utils/convert";
import styles from "./DesktopType.module.scss";
import { useEffect, useState } from "react";
import { IType } from "../../../interface/IType";
import types from "../../../json/types.json";

const DesktopType = () => {
  const nav = useNavigate();
  const [typeData, setTypeData] = useState<IType>();

  function onCloseBtn() {
    nav("/");
    sessionStorage.removeItem("type");
    sessionStorage.removeItem("currentPoke");
  }

  useEffect(() => {
    const sessionType = sessionStorage.getItem("type");
    if (sessionType) {
      const type = types.find((type) => type.name === sessionType);
      if (type) {
        setTypeData(typeConvertDamegeData(type));
      }
    }
  }, []);

  const onChangeType = (item: string) => {
    const value = getTypeEn(item);
    sessionStorage.setItem("type", value);
    const type = types.find((type) => type.name === value);
    if (type) {
      setTypeData(typeConvertDamegeData(type));
    }
  };

  return (
    <div className={styles.desktopType}>
      {typeData && (
        <div className={styles.container}>
          <header className={styles.header}>
            <img
              src={`${process.env.PUBLIC_URL}/${getTypeIcon(typeData.name)}`}
              alt="img"
              className={styles.icon}
            />
            <div
              className={styles.title}
              style={{ color: getColor(typeData.name) }}
            >
              {typeData.name}(타입)
            </div>
          </header>
          <article className={styles.body}>
            <div className={styles.title}>2배 데미지</div>
          </article>
        </div>
      )}
    </div>
  );
};

export default DesktopType;
