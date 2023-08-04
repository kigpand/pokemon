import { useNavigate } from "react-router-dom";
import { IPokemonList } from "../../../../../interface/IPokemonList";
import TypeDif from "../../../typeDif/TypeDif";
import AbilityList from "../abilityList/AbilityList";
import DetailList from "../detailList/DetailList";
import styles from "./DetailMain.module.scss";

type Props = {
  poke: IPokemonList;
};

const DetailMain = ({ poke }: Props) => {
  const nav = useNavigate();

  function onTypeClick(type: string) {
    sessionStorage.setItem("type", type);
    nav("/type");
  }

  return (
    <div className={styles.detailMain}>
      <header className={styles.header}>
        <div className={styles.num}>No.{poke.id}</div>
        <div className={styles.name}>{poke.name}</div>
        <div className={styles.generate}>{poke.generate}</div>
        <TypeDif poke={poke} />
      </header>
      <main className={styles.lists}>
        <DetailList items={poke} type="분류" />
        <DetailList items={poke} type="타입" onClick={onTypeClick} />
        <AbilityList items={poke} type="특성" />
        <DetailList items={poke} type="종족값" />
      </main>
    </div>
  );
};

export default DetailMain;
