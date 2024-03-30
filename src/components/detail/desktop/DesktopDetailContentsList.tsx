import styled from "styled-components";
import DesktopDetailContentsListAbility from "./DesktopDetailContentsListAbility";
import DesktopDetailContentsListStat from "./DesktopDetailContentsListStat";
import DesktopDetailContentsListType from "./DesktopDetailContentsListType";
import { IPokemonList } from "interface/IPokemonList";

interface IDetailList {
  type: string;
  items: IPokemonList;
  onClick?: (item: any) => void;
}

function getRenderItem(items: IPokemonList, type: string, onClick: any) {
  switch (type) {
    case "타입":
      return <DesktopDetailContentsListType items={items} onClick={onClick} />;
    case "특성":
      return (
        <DesktopDetailContentsListAbility items={items} onClick={onClick} />
      );
    case "종족값":
      return <DesktopDetailContentsListStat items={items} />;
    default:
      return <div className="body">{items.genus}</div>;
  }
}

const DesktopDetailContentsList = ({ type, items, onClick }: IDetailList) => {
  return (
    <DetailListStyled>
      <TitleStyled>{type}</TitleStyled>
      {getRenderItem(items, type, onClick)}
    </DetailListStyled>
  );
};

export default DesktopDetailContentsList;

const DetailListStyled = styled.div`
  padding: 5px;
  border: 1px solid lightgray;
  margin-right: 10px;
  margin-top: 10px;

  .body {
    width: 90px;
    text-align: center;
  }
`;

const TitleStyled = styled.div`
  text-align: center;
  font-weight: 700;
  margin-bottom: 10px;
  color: gray;
`;
