import { IPokemonList } from "../../../interface/IPokemonList";
import { getColor } from "../../../utils/convert";
import styles from "./MobileDetail.module.scss";
import DetailInfo from "./info/DetailInfo";
import MobileDetailHeader from "./header/MobileDetailHeader";
import DetailGenus from "./genus/DetailGenus";
import DetailType from "./type/DetailType";
import DetailAbility from "./ability/DetailAbility";
import DetailStatus from "./status/DetailStatus";
import DetailLayout from "./layout/DetailLayout";
import { useMega } from "../../../hooks/useMega";
import { useState } from "react";

interface IMobileDetail {
  currentPoke: IPokemonList;
}

const MobileDetail = ({ currentPoke }: IMobileDetail) => {
  const [poke, setPoke] = useState<IPokemonList>(currentPoke);
  const { megaPoke } = useMega(currentPoke);

  function onChangeOrigin() {
    setPoke(currentPoke);
  }

  function onChangeMega() {
    if (!megaPoke) return;
    // setPoke(megaPoke);
  }

  function onChangeDymax(dymax: string) {
    setPoke({ ...currentPoke, imageUrl: dymax });
  }

  return (
    <div className={styles.mobileDetail}>
      {poke?.types && (
        <div
          className={styles.container}
          style={{ borderColor: getColor(poke.types![0]) }}
        >
          <MobileDetailHeader poke={poke} />
          <DetailInfo
            poke={poke}
            currentPoke={currentPoke}
            megaPoke={megaPoke || null}
            onChangeOrigin={onChangeOrigin}
            onChangeMega={onChangeMega}
            onChangeDymax={onChangeDymax}
          />
          <DetailLayout
            types={poke.types}
            title="분류"
            component={<DetailGenus genus={poke.genus} />}
          />
          <DetailLayout
            types={poke.types}
            title="타입"
            component={<DetailType types={poke.types} />}
          />
          <DetailLayout
            types={poke.types}
            title="특성"
            component={<DetailAbility abilities={poke.abilities} />}
          />
          <DetailLayout
            types={poke.types}
            title="종족값"
            component={<DetailStatus stats={poke.stats} />}
          />
          <b style={{ paddingLeft: "5px" }}>정보</b>
          <div className={styles.flavor}>
            <div>{poke?.flavor}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileDetail;
