import { useState } from "react";
import styles from "./SortSelect.module.scss";
import SortBtns from "../SortBtns";
import { SortType } from "../../../../typedef/SortType";

type Props = {
  onCloseBtn: () => void;
};

const SortSelect = ({ onCloseBtn }: Props) => {
  const [selectOption, setSelectOption] = useState<SortType>("id");

  return (
    <div className={styles.sortSelect}>
      <div className={styles.title}>정렬</div>
      <select
        className={styles.select}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setSelectOption(e.target.value as SortType)
        }
      >
        <option value="id">도감번호</option>
        <option value="weight">무게</option>
        <option value="height">키</option>
        <option value="hp">HP</option>
        <option value="attack">공격</option>
        <option value="defense">방어</option>
        <option value="specialAttack">특수공격</option>
        <option value="specialDefense">특수방어</option>
        <option value="speed">스피드</option>
        <option value="allStat">총합</option>
      </select>
      <SortBtns type={selectOption} onCloseBtn={onCloseBtn} />
    </div>
  );
};

export default SortSelect;
