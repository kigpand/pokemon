import { IPokemonList } from "../../../../interface/IPokemonList";
import styles from "./DetailInfo.module.scss";
import TypeDif from "../../typeDif/TypeDif";
import { useDymax } from "../../../../hooks/useDymax";
import { useState } from "react";
import EvolutionModal from "../../evolutionModal/EvolutionModal";

type Props = {
  poke: IPokemonList;
  currentPoke: IPokemonList;
  megaPoke: IPokemonList | null | IPokemonList[];
  onChangeOrigin: () => void;
  onChangeMega: () => void;
  onChangeDymax: (dymax: string) => void;
};

const DetailInfo = ({
  poke,
  currentPoke,
  megaPoke,
  onChangeOrigin,
  onChangeMega,
  onChangeDymax,
}: Props) => {
  const { dymax } = useDymax(currentPoke);
  const [modal, setModal] = useState<boolean>(false);

  function handleEvolutionModal(type: "origin" | "mega" | "dymax") {
    if (type === "origin") {
      onChangeOrigin();
    }
    if (type === "mega") {
      onChangeMega();
    }
    if (type === "dymax") {
      onChangeDymax(dymax!);
    }
    setModal(false);
  }

  return (
    <div className={styles.info}>
      {(megaPoke || dymax) && (
        <div className={styles.imgText} onClick={() => setModal(true)}>
          다른 폼 보기
        </div>
      )}
      <img
        src={poke.imageUrl}
        alt={poke.name}
        className={styles.img}
        referrerPolicy="no-referrer"
      ></img>
      <TypeDif poke={poke} />
      <div className={styles.wHstat}>
        <div>키: {poke.height / 10}m</div>
        <div>몸무게: {poke.weight / 10}kg</div>
      </div>
      {modal && (
        <EvolutionModal
          megaPoke={megaPoke}
          dymax={dymax || undefined}
          handleEvolutionModal={handleEvolutionModal}
        />
      )}
    </div>
  );
};

export default DetailInfo;
