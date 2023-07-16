import { useEffect, useState } from "react";
import styles from "./TypeDetailText.module.scss";
import { getColor } from "../../../utils/convert";

interface ITypeText {
  count: number;
  text: string;
}

type Props = {
  title: string;
  arr: string[];
  num: number;
};

const TypeDetailText = ({ title, arr, num }: Props) => {
  const [types, setTypes] = useState<ITypeText[]>([]);

  useEffect(() => {
    let typeArr: ITypeText[] = [];

    // 각 상성들 중첩되는 항목 제거 및 count 증가로 배율 조정
    arr.forEach((item: string) => {
      const result = typeArr.find((type: ITypeText) => type.text === item);
      if (result) {
        typeArr = [
          ...typeArr.filter((type) => type.text !== item),
          { ...result, count: 2 },
        ];
      } else {
        typeArr = [...typeArr, { text: item, count: 1 }];
      }
    });
    setTypes(typeArr);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.types}>
        {types.map((item: ITypeText, i: number) => {
          return (
            <div
              className={styles.type}
              style={{ backgroundColor: getColor(item.text) }}
              key={i}
            >
              <strong>{item.text}</strong>{" "}
              <span className={styles.num}>
                x
                {num === 2
                  ? num * item.count
                  : num === 0.5
                  ? num / item.count
                  : 0}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TypeDetailText;
