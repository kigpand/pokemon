import { useSelector } from "react-redux";
import styles from "./AddBookModal.module.scss";
import { RootState } from "../../../store/store";

interface IBookModal {
  onCloseBookModal: () => void;
}

const AddBookModal = ({ onCloseBookModal }: IBookModal) => {
  const theme = useSelector((state: RootState) => state.datas.theme);
  function onCloseModal() {
    onCloseBookModal();
  }

  return (
    <div className={styles.addBookModal}>
      <div
        className={styles.main}
        style={{
          backgroundColor: theme === "dark" ? "black" : "white",
          color: theme === "dark" ? "white" : "black",
        }}
      >
        <div className={styles.title}>도감</div>
        <div className={styles.line}></div>
        <div className={styles.content}>몬스터가 도감에 추가되었습니다.</div>
      </div>
      <div className={styles.back} onClick={onCloseModal}></div>
    </div>
  );
};

export default AddBookModal;
