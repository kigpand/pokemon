import {
  getColor,
  getDamegeType,
  getTypeEn,
  typeConvertDamegeData,
} from "../../../utils/convert";
import styles from "./DesktopType.module.scss";
import { useEffect, useState } from "react";
import { IType } from "../../../interface/IType";
import types from "../../../json/types.json";
import DesktopTypeHeader from "./header/DesktopTypeHeader";
import TypeItem from "../item/TypeItem";
import DetailHeader from "../../detail/desktop/DetailHeader";

const DesktopType = () => {
  const [typeData, setTypeData] = useState<IType>();

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
      <DetailHeader />
      {typeData && (
        <div
          className={styles.container}
          style={{ borderColor: getColor(typeData.name) }}
        >
          <DesktopTypeHeader name={typeData.name} />
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

export default DesktopType;
