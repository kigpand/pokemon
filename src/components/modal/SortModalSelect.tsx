import SortModalItemBtns from "./SortModalItemBtns";
import styled from "styled-components";
import { useState } from "react";
import { SortType } from "typedef/SortType";

type Props = {
  onCloseBtn: () => void;
};

const SortModalSelect = ({ onCloseBtn }: Props) => {
  const [selectOption, setSelectOption] = useState<SortType>("id");

  return (
    <ModalSelectWrapper>
      <TitleStyled>정렬</TitleStyled>
      <SelectStyled
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
      </SelectStyled>
      <SortModalItemBtns type={selectOption} onCloseBtn={onCloseBtn} />
    </ModalSelectWrapper>
  );
};

export default SortModalSelect;

const ModalSelectWrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TitleStyled = styled.header`
  width: 95%;
  padding: 3px 5px;
  border-radius: 4px;
  margin: 10px 0 5px 0;
  font-weight: bold;
  color: black;
`;

const SelectStyled = styled.select`
  margin-bottom: 5px;
  color: black;
  font-weight: bold;
  border: 1px solid lightgray;
  outline: none;
  height: 30px;
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`;
