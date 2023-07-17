import styles from "./MobileType.module.scss";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IType } from "../../../interface/IType";
import types from "../../../json/types.json";
import {
  getColor,
  getTypeEn,
  getTypeIcon,
  typeConvertDamegeData,
} from "../../../utils/convert";
import MobileTypeItem from "./MobileTypeItem";

const MobileType = () => {
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
    <div className={styles.mobileType}>
      {typeData && (
        <div
          className={styles.container}
          style={{ borderColor: getColor(typeData.name) }}
        >
          <AiOutlineHome
            className={styles.home}
            onClick={onCloseBtn}
            style={{ color: getColor(typeData.name) }}
          />
          <div className={styles.header}>
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
          </div>
          {typeData.doubleFrom && (
            <MobileTypeItem
              arr={typeData.doubleFrom}
              title="x2 데미지 받음"
              type={typeData.name}
              onChangeType={onChangeType}
            />
          )}
          {typeData.doubleTo && (
            <MobileTypeItem
              arr={typeData.doubleTo}
              title="x2 데미지 줌"
              type={typeData.name}
              onChangeType={onChangeType}
            />
          )}
          {typeData.halfFrom && (
            <MobileTypeItem
              arr={typeData.halfFrom}
              title="x0.5 데미지 받음"
              type={typeData.name}
              onChangeType={onChangeType}
            />
          )}
          {typeData.halfTo && (
            <MobileTypeItem
              arr={typeData.halfTo}
              title="x0.5 데미지 줌"
              type={typeData.name}
              onChangeType={onChangeType}
            />
          )}
          {typeData.noFrom && (
            <MobileTypeItem
              arr={typeData.noFrom}
              title="데미지 받지않음"
              type={typeData.name}
              onChangeType={onChangeType}
            />
          )}
          {typeData.noTo && (
            <MobileTypeItem
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

export default MobileType;
