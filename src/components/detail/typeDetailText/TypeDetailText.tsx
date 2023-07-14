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
              <span className={styles.num}>x{item.count * num}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TypeDetailText;
