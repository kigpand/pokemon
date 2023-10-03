import { IPokemonList } from "../../../../../../../interface/IPokemonList";
import styles from "./DetailListAbility.module.scss";

type Props = {
  items: IPokemonList;
  onClick: any;
};

export default function DeatilListAbility({ items, onClick }: Props) {
  return (
    <div className={styles.body}>
      {items.abilities?.map((item: string, i: number) => {
        return (
          <div key={i} className={styles.ability} onClick={() => onClick(item)}>
            {item}
          </div>
        );
      })}
    </div>
  );
}
