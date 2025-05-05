import type { IPokemonList } from "interface/IPokemonList";
import { AiFillDelete } from "react-icons/ai";
import styled from "styled-components";
import type { SortType } from "typedef/SortType";
import { baseStat } from "utils/base";
import { getColor, getStatKorea } from "utils/convert";

type Props = {
  bookPokeList: IPokemonList;
  handleRemove: (poke: IPokemonList) => void;
};

export default function BookFullModalList({
  bookPokeList,
  handleRemove,
}: Props) {
  return (
    <ListWrapper>
      <NameField $bgColor={getColor(bookPokeList?.types![0])}>
        {bookPokeList.name}
      </NameField>
      {baseStat.map((item: SortType, i: number) => {
        return (
          <StatWrapper key={i}>
            <StatTitle>{getStatKorea(item)}</StatTitle>
            <StatValue className="value">{bookPokeList[item]}</StatValue>
          </StatWrapper>
        );
      })}
      <Delete className="button" onClick={() => handleRemove(bookPokeList)} />
    </ListWrapper>
  );
}

const ListWrapper = styled.li`
  display: flex;
  gap: 5px;
  padding: 10px;
  border-bottom: 1px solid lightgray;
`;

const NameField = styled.div<{ $bgColor: string }>`
  font-size: 12px;
  color: white;
  font-weight: bold;
  width: 60px;
  background-color: ${(props) => props.$bgColor};
  border-radius: 4px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const StatWrapper = styled.div`
  height: 25px;
  padding: 0px 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StatTitle = styled.div`
  font-weight: bold;
  font-size: 10px;
`;

const StatValue = styled.div`
  font-size: 8px;
`;

const Delete = styled(AiFillDelete)`
  height: 25px;
  margin-left: 20px;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;
