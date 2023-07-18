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

interface IMobileDetail {
  currentPoke: IPokemonList;
}

const MobileDetail = ({ currentPoke }: IMobileDetail) => {
  return (
    <div className={styles.mobileDetail}>
      {currentPoke?.types && (
        <div
          className={styles.container}
          style={{ borderColor: getColor(currentPoke.types![0]) }}
        >
          <MobileDetailHeader currentPoke={currentPoke} />
          <DetailInfo currentPoke={currentPoke} />
          <DetailLayout
            types={currentPoke.types}
            title="분류"
            component={<DetailGenus genus={currentPoke.genus} />}
          />
          <DetailLayout
            types={currentPoke.types}
            title="타입"
            component={<DetailType types={currentPoke.types} />}
          />
          {currentPoke?.abilities && (
            <DetailLayout
              types={currentPoke.types}
              title="특성"
              component={<DetailAbility abilities={currentPoke.abilities} />}
            />
          )}
          {currentPoke?.stats && (
            <DetailLayout
              types={currentPoke.types}
              title="종족값"
              component={<DetailStatus stats={currentPoke.stats} />}
            />
          )}
          <b style={{ paddingLeft: "5px" }}>정보</b>
          <div className={styles.flavor}>
            <div>{currentPoke?.flavor}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileDetail;
