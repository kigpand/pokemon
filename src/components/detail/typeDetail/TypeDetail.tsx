import styles from "./TypeDetail.module.scss";
import types from "../../../json/types.json";
import { useEffect, useState } from "react";
import { typeConvertDamegeData } from "../../../utils/convert";
import TypeDetailText from "../typeDetailText/TypeDetailText";

type Props = {
  typeArr: string[];
  onCloseType: () => void;
};

const TypeDetail = ({ typeArr, onCloseType }: Props) => {
  const [type, setType] = useState<any | null>(null);

  useEffect(() => {
    let typeObj: any = {};
    typeArr.forEach((type: string, i: number) => {
      const result = types.find((item) => item.name === type);
      if (result) {
        const convert = typeConvertDamegeData(result);
        if (i === 0) {
          typeObj = { ...convert };
        } else {
          typeObj = {
            doubleFrom: [...typeObj.doubleFrom, ...convert.doubleFrom],
            doubleTo: [...typeObj.doubleTo, ...convert.doubleTo],
            halfFrom: [...typeObj.halfFrom, ...convert.halfFrom],
            halfTo: [...typeObj.halfTo, ...convert.halfTo],
            noFrom: [...typeObj.noFrom, ...convert.noFrom],
            noTo: [...typeObj.noTo, ...convert.noTo],
          };
        }
      }
    });
    console.log(typeObj);
    setType(typeObj);
  }, [typeArr]);

  return (
    <div className={styles.typeDetail}>
      <div className={styles.close} onClick={onCloseType}>
        x
      </div>
      <article className={styles.article}>
        <div className={styles.title}>공격 상성</div>
        {type && type.doubleTo.length > 0 && (
          <TypeDetailText title="효과가 좋음" arr={type.doubleTo} num={2} />
        )}
        {type && type.halfTo.length > 0 && (
          <TypeDetailText title="효과가 별로" arr={type.halfTo} num={0.5} />
        )}
        {type && type.noTo.length > 0 && (
          <TypeDetailText title="효과가 없음" arr={type.noTo} num={0} />
        )}
      </article>
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
