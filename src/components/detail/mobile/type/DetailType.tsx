import { useNavigate } from "react-router-dom";
import { getColor, getTypeKo } from "../../../../utils/convert";
import styles from "./DetailType.module.scss";

type Props = {
  types: string[];
};

const DetailType = ({ types }: Props) => {
  const nav = useNavigate();

  function onTypeClick(type: string) {
    sessionStorage.setItem("type", type);
    nav("/type");
  }

  return (
    <div className={styles.types}>
      <div className={styles.mainContents}>
        {types.map((type, i) => {
          return (
            <span
              key={i}
              className={styles.type}
              style={{ backgroundColor: getColor(type) }}
              onClick={() => onTypeClick(type)}
            >
              {getTypeKo(type)}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default DetailType;
