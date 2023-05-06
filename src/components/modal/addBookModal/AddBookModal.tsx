import styles from "./AddBookModal.module.scss";

interface IBookModal {
  onCloseBookModal: () => void;
}

const AddBookModal = ({ onCloseBookModal }: IBookModal) => {
  function onCloseModal() {
    onCloseBookModal();
  }

  return (
    <div className={styles.addBookModal}>
      <div className={styles.main}>
        <div className={styles.title}>도감</div>
        <div className={styles.line}></div>
        <div className={styles.content}>몬스터가 도감에 추가되었습니다.</div>
      </div>
      <div className={styles.back} onClick={onCloseModal}></div>
    </div>
  );
};

export default AddBookModal;
