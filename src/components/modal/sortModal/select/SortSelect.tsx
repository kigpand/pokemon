import { useState } from "react";
import styles from "./SortSelect.module.scss";
import SortBtns from "../SortBtns";

type Props = {
  onCloseBtn: () => void;
};

const SortSelect = ({ onCloseBtn }: Props) => {
  const [selectOption, setSelectOption] = useState<string>("id");

  return (
    <div className={styles.sortSelect}>
      <div className={styles.title}>정렬</div>
      <select
        className={styles.select}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setSelectOption(e.target.value)
        }
      >
        <option value="id">도감번호</option>
        <option value="weight">무게</option>
        <option value="height">키</option>
        <option value="hp">HP</option>
        <option value="공격">공격</option>
        <option value="방어">방어</option>
        <option value="특수공격">특수공격</option>
        <option value="특수방어">특수방어</option>
        <option value="스피드">스피드</option>
        <option value="총합">총합</option>
      </select>
      <SortBtns type={selectOption} onCloseBtn={onCloseBtn} />
    </div>
  );
};

export default SortSelect;
