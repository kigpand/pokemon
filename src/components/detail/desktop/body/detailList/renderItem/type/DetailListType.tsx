import { IPokemonList } from "../../../../../../../interface/IPokemonList";
import { getTypeIcon } from "../../../../../../../utils/convert";
import styles from "./DetailListType.module.scss";

type Props = {
  items: IPokemonList;
  onClick: any;
};

export default function DetailListType({ items, onClick }: Props) {
  return (
    <div className={styles.body}>
      {items.types?.map((item: string, i: number) => {
        return (
          <img
            key={i}
            src={`${process.env.PUBLIC_URL}/${getTypeIcon(item)}`}
            alt="img"
            className={styles.type}
            onClick={() => onClick(item)}
          />
        );
      })}
    </div>
  );
}
