import { useEffect, useState } from "react";
import styles from "./TypeDif.module.scss";
import TypeDetail from "../typeDetail/TypeDetail";
import { IPokemonList } from "../../../interface/IPokemonList";
import VsModal from "../../modal/vsModal/VsModal";

type Props = {
  poke: IPokemonList;
};

const TypeDif = ({ poke }: Props) => {
  const [typeDetail, setTypeDetail] = useState<boolean>(false);
  const [vs, setVS] = useState<boolean>(false);

  useEffect(() => {
    if (typeDetail) {
      setTypeDetail(false);
    }
  }, [poke]);

  return (
    <div className={styles.typeDif}>
      <div className={styles.vs} onClick={() => setTypeDetail(true)}>
        상성표 보기
      </div>
      <div className={styles.vsOther} onClick={() => setVS(true)}>
        겨루기
      </div>
      {typeDetail && (
        <TypeDetail
          typeArr={poke.types || []}
          onCloseType={() => setTypeDetail(false)}
        />
      )}
      {vs && <VsModal currentPoke={poke} closeModal={() => setVS(false)} />}
    </div>
  );
};

export default TypeDif;
