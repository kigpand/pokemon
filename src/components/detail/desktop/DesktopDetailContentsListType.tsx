import type { IPokemonList } from "interface/IPokemonList";
import styled from "styled-components";
import { getTypeIcon } from "utils/convert";

type Props = {
  items: IPokemonList;
  onClick: any;
};

export default function DesktopDetailContentsListType({
  items,
  onClick,
}: Props) {
  return (
    <ListTypeStyled>
      {items.types?.map((item: string, i: number) => {
        return (
          <img
            key={i}
            src={getTypeIcon(item)}
            alt="img"
            className="type"
            onClick={() => onClick(item)}
          />
        );
      })}
    </ListTypeStyled>
  );
}

const ListTypeStyled = styled.div`
  display: flex;
  padding: 5px;
  font-weight: 700;
  gap: 5px;

  .type {
    text-align: center;
    cursor: pointer;
    border-radius: 4px;
    margin-bottom: 3px;
    height: 24px;
    object-fit: contain;
  }
`;
