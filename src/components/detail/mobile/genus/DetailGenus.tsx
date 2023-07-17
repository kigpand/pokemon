import styles from "./DetailGenus.module.scss";

type Props = {
  genus: string;
};

const DetailGenus = ({ genus }: Props) => {
  return (
    <div className={styles.genus}>
      <div className={styles.mainContents}>
        <span>{genus}</span>
      </div>
    </div>
  );
};

export default DetailGenus;
