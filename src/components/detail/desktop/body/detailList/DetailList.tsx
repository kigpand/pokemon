import { IPokemonList } from "../../../../../interface/IPokemonList";
import styles from "./DetailList.module.scss";
import DetailListAbility from "./renderItem/ability/DetailListAbility";
import DetailListStat from "./renderItem/stat/DetailListStat";
import DetailListType from "./renderItem/type/DetailListType";

interface IDetailList {
  type: string;
  items: IPokemonList;
  onClick?: (item: any) => void;
}

function getRenderItem(items: IPokemonList, type: string, onClick: any) {
  switch (type) {
    case "타입":
      return <DetailListType items={items} onClick={onClick} />;
    case "특성":
      return <DetailListAbility items={items} onClick={onClick} />;
    case "종족값":
      return <DetailListStat items={items} />;
    default:
      return <div className={styles.body}>{items.genus}</div>;
  }
}

const DetailList = ({ type, items, onClick }: IDetailList) => {
  return (
    <div className={styles.detailList}>
      <div className={styles.title}>{type}</div>
      {getRenderItem(items, type, onClick)}
    </div>
  );
};

export default DetailList;
