import { useState } from "react";
import { useDymax } from "../../../../../hooks/useDymax";
import { IPokemonList } from "../../../../../interface/IPokemonList";
import styles from "./DetailImg.module.scss";
import EvolutionModal from "../../../evolutionModal/EvolutionModal";

type Props = {
  currentPoke: IPokemonList;
  megaPoke?: IPokemonList | IPokemonList[] | null;
  onChangeOrigin: () => void;
  onChangeMegaPoke: () => void;
  onChangeDymaxImg: (img: string) => void;
};

const DetailImg = (props: Props) => {
  const { dymax } = useDymax(props.currentPoke);
  const [modal, setModal] = useState<boolean>(false);

  function handleEvolutionModal(type: "origin" | "mega" | "dymax") {
    if (type === "origin") {
      props.onChangeOrigin();
    }
    if (type === "mega") {
      props.onChangeMegaPoke();
    }
    if (type === "dymax") {
      props.onChangeDymaxImg(dymax!);
    }
    setModal(false);
  }

  return (
    <div className={styles.imgs}>
      <img
        src={props.currentPoke.imageUrl}
        alt="img"
        className={styles.img}
        referrerPolicy="no-referrer"
      />
      {(props.megaPoke || dymax) && (
        <div className={styles.imgText} onClick={() => setModal(true)}>
          다른 폼 보기
        </div>
      )}
      {modal && (
        <EvolutionModal
          dymax={dymax || undefined}
          megaPoke={props.megaPoke!}
          handleEvolutionModal={handleEvolutionModal}
        />
      )}
    </div>
  );
};

export default DetailImg;
