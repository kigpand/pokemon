import { useSelector } from "react-redux";
import { IPokemonList } from "../../../interface/IPokemonList";
import { getColor } from "../../../utils/convert";
import AbilityModal from "../../modal/abilityModal/AbilityModal";
import styles from "./MobileDetail.module.scss";
import { RootState } from "../../../store/store";
import DetailInfo from "./info/DetailInfo";
import MobileDetailHeader from "./header/MobileDetailHeader";
import DetailGenus from "./genus/DetailGenus";
import DetailType from "./type/DetailType";
import DetailAbility from "./ability/DetailAbility";
import DetailStatus from "./status/DetailStatus";

interface IMobileDetail {
  currentPoke: IPokemonList;
}

const MobileDetail = ({ currentPoke }: IMobileDetail) => {
  const currentAbility = useSelector(
    (state: RootState) => state.datas.currentAbility
  );

  return (
    <div className={styles.mobileDetail}>
      {currentPoke?.types && (
        <div
          className={styles.container}
          style={{ borderColor: getColor(currentPoke.types![0]) }}
        >
          <MobileDetailHeader currentPoke={currentPoke} />
          <DetailInfo currentPoke={currentPoke} />
          <DetailGenus types={currentPoke.types} genus={currentPoke.genus} />
          <DetailType types={currentPoke.types} />
          {currentPoke?.abilities && (
            <DetailAbility
              abilities={currentPoke.abilities}
              types={currentPoke.types}
            />
          )}
          {currentPoke?.stats && (
            <DetailStatus types={currentPoke.types} stats={currentPoke.stats} />
          )}
          <b style={{ paddingLeft: "5px" }}>정보</b>
          <div className={styles.flavor}>
            <div>{currentPoke?.flavor}</div>
          </div>
        </div>
      )}
      {currentAbility && <AbilityModal />}
    </div>
  );
};

export default MobileDetail;
