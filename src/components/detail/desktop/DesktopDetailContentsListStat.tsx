import type { IPokemonList } from "interface/IPokemonList";
import type { SortType } from "typedef/SortType";
import { baseStat } from "utils/base";
import { getStatKorea, getStatusBarColor } from "utils/convert";
import styled from "styled-components";

type Props = {
  items: IPokemonList;
};

export default function DesktopDetailContentsListStat({ items }: Props) {
  return (
    <ListStat>
      {baseStat.map((item: SortType, i: number) => {
        return (
          <div
            className="stat"
            style={{ backgroundColor: getStatusBarColor(item) }}
            key={i}
          >
            <div>{getStatKorea(item)}</div>
            <div className="value">{items[item]}</div>
          </div>
        );
      })}
    </ListStat>
  );
}

const ListStat = styled.div`
  display: flex;
  padding: 5px;
  font-weight: 700;
  gap: 5px;

  .stat {
    width: 50px;
    padding: 10px 5px;
    margin-right: 5px;
    text-align: center;
    border-radius: 8px;
    color: white;

    .value {
      margin-top: 5px;
    }
  }
`;
