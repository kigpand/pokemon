import {
  getColor,
  getTypeEn,
  getTypeIcon,
  typeConvertDamegeData,
} from "../../utils/convert";
import styles from "./Type.module.scss";
import TypeItem from "./TypeItem";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import types from "../../json/types.json";
import { IType } from "../../interface/IType";
import HOME from "../../imgs/home.png";

const Type = () => {
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
    <div className={styles.type}>
      {typeData && (
        <div
          className={styles.container}
          style={{ borderColor: getColor(typeData.name) }}
        >
          <img
            src={HOME}
            alt="home"
            className={styles.home}
            onClick={onCloseBtn}
          ></img>
          <div className={styles.header}>
            <img
              src={`${process.env.PUBLIC_URL}/${getTypeIcon(typeData.name)}`}
              alt="img"
              className={styles.icon}
            />
            <div
              className={styles.title}
              style={{ backgroundColor: getColor(typeData.name) }}
            >
              {typeData.name}(타입)
            </div>
          </div>
          {typeData.doubleFrom && (
            <TypeItem
              arr={typeData.doubleFrom}
              title="x2 데미지 받음"
              type={typeData.name}
              onChangeType={onChangeType}
            />
          )}
          {typeData.doubleTo && (
            <TypeItem
              arr={typeData.doubleTo}
              title="x2 데미지 줌"
              type={typeData.name}
              onChangeType={onChangeType}
            />
          )}
          {typeData.halfFrom && (
            <TypeItem
              arr={typeData.halfFrom}
              title="x0.5 데미지 받음"
              type={typeData.name}
              onChangeType={onChangeType}
            />
          )}
          {typeData.halfTo && (
            <TypeItem
              arr={typeData.halfTo}
              title="x0.5 데미지 줌"
              type={typeData.name}
              onChangeType={onChangeType}
            />
          )}
          {typeData.noFrom && (
            <TypeItem
              arr={typeData.noFrom}
              title="데미지 받지않음"
              type={typeData.name}
              onChangeType={onChangeType}
            />
          )}
          {typeData.noTo && (
            <TypeItem
              arr={typeData.noTo}
              title="데미지를 줄수 없음"
              type={typeData.name}
              onChangeType={onChangeType}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Type;
