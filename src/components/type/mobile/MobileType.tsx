import styles from "./MobileType.module.scss";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IType } from "../../../interface/IType";
import types from "../../../json/types.json";
import {
  getColor,
  getDamegeType,
  getTypeEn,
  typeConvertDamegeData,
} from "../../../utils/convert";
import TypeItem from "../item/TypeItem";
import MobileTypeHeader from "./header/MobileTypeHeader";

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
          <MobileTypeHeader name={typeData.name} />
          {Object.entries(typeData).map(
            (values: [string, string[]], i: number) => {
              if (i === 0 || values[1].length === 0) return null;
              return (
                <TypeItem
                  key={i}
                  arr={values[1]}
                  title={getDamegeType[values[0]]}
                  type={typeData.name}
                  onChangeType={onChangeType}
                />
              );
            }
          )}
        </div>
      )}
    </div>
  );
};

export default MobileType;
