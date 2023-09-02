import styles from "./TypeModal.module.scss";
import types from "../../../json/types.json";
import { getTypeIcon, getTypeKo } from "../../../utils/convert";
import { useNavigate } from "react-router-dom";

type Props = {
  onCloseModal: () => void;
};

export default function TypeModal({ onCloseModal }: Props) {
  const nav = useNavigate();

  function onType(type: string) {
    onCloseModal();
    sessionStorage.setItem("type", type);
    nav("/type");
  }

  return (
    <div className={styles.typeModal}>
      <div className={styles.main}>
        <div className={styles.title}>타입을 선택해주세요</div>
        <div className={styles.line}></div>
        <div className={styles.content}>
          {types.map((item, i) => {
            return (
              <div
                key={i}
                className={styles.icon}
                onClick={() => onType(item.name)}
              >
                <div className={styles.front}>{getTypeKo(item.name)}</div>
                <img
                  src={`${process.env.PUBLIC_URL}/${getTypeIcon(item.name)}`}
                  className={styles.types}
                ></img>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.back} onClick={onCloseModal}></div>
    </div>
  );
}
