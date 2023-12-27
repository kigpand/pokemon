import styles from "./TypeDetail.module.scss";
import types from "../../../json/types.json";
import { useEffect, useState } from "react";
import { typeConvertDamegeData } from "../../../utils/convert";
import TypeDetailText from "../typeDetailText/TypeDetailText";
import { BsX } from "react-icons/bs";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

type Props = {
  typeArr: string[];
  onCloseType: () => void;
};

// 2배, 반감, 0배에 같은 타입이 존재할 경우 해당 타입의 값을 필터링 해주는 함수
function filterType(typeObj: any) {
  if (typeObj.doubleFrom.length > 0) {
    for (let i = 0; i < typeObj.doubleFrom.length; i++) {
      const noFromItem = typeObj.noFrom.find(
        (item: string) => item === typeObj.doubleFrom[i]
      );
      const halfFromItem = typeObj.halfFrom.find(
        (item: string) => item === typeObj.doubleFrom[i]
      );
      if (noFromItem) {
        const doubleFrom = typeObj.doubleFrom.filter(
          (item: string) => item !== typeObj.doubleFrom[i]
        );
        typeObj.doubleFrom = [...doubleFrom];
      }
      if (halfFromItem) {
        const doubleFrom = typeObj.doubleFrom.filter(
          (item: string) => item !== typeObj.doubleFrom[i]
        );
        const halfFrom = typeObj.halfFrom.filter(
          (item: string) => item !== typeObj.doubleFrom[i]
        );
        typeObj.doubleFrom = [...doubleFrom];
        typeObj.halfFrom = [...halfFrom];
      }
    }
  }
  if (typeObj.halfFrom.length > 0) {
    for (let i = 0; i < typeObj.halfFrom.length; i++) {
      const noFromItem = typeObj.noFrom.find(
        (item: string) => item === typeObj.halfFrom[i]
      );
      if (noFromItem) {
        const halfFrom = typeObj.halfFrom.filter(
          (item: string) => item !== typeObj.halfFrom[i]
        );
        typeObj.halfFrom = [...halfFrom];
      }
    }
  }
  return typeObj;
}

const TypeDetail = ({ typeArr, onCloseType }: Props) => {
  const [type, setType] = useState<any | null>(null);
  const theme = useSelector((state: RootState) => state.datas.theme);

  useEffect(() => {
    let typeObj: any = {};
    typeArr.forEach((type: string, i: number) => {
      const result = types.find((item) => item.name === type);
      if (result) {
        const convert = typeConvertDamegeData(result);
        if (i === 0) {
          typeObj = {
            doubleFrom: [...convert.doubleFrom],
            halfFrom: [...convert.halfFrom],
            noFrom: [...convert.noFrom],
          };
        } else {
          typeObj = {
            doubleFrom: [...typeObj.doubleFrom, ...convert.doubleFrom],
            halfFrom: [...typeObj.halfFrom, ...convert.halfFrom],
            noFrom: [...typeObj.noFrom, ...convert.noFrom],
          };
        }
      }
    });
    const newType = filterType(typeObj);
    setType(newType);
  }, [typeArr]);

  return (
    <div
      className={styles.typeDetail}
      style={{
        backgroundColor: theme === "dark" ? "black" : "white",
      }}
    >
      <BsX className={styles.close} onClick={onCloseType} />
      <article className={styles.article}>
        <div className={styles.title}>방어 상성</div>
        {type && type.doubleFrom.length > 0 && (
          <TypeDetailText title="효과가 좋음" arr={type.doubleFrom} num={2} />
        )}
        {type && type.halfFrom.length > 0 && (
          <TypeDetailText title="효과가 별로" arr={type.halfFrom} num={0.5} />
        )}
        {type && type.noFrom.length > 0 && (
          <TypeDetailText title="효과가 없음" arr={type.noFrom} num={0} />
        )}
      </article>
    </div>
  );
};

export default TypeDetail;
