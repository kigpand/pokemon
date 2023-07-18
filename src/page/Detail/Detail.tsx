import styles from "./Detail.module.scss";
import { useEffect, useState } from "react";
import { IPokemonList } from "../../interface/IPokemonList";
import DesktopDetail from "../../components/detail/desktop/DesktopDetail";
import MobileDetail from "../../components/detail/mobile/MobileDetail";
import { useWindowSize } from "../../hooks/useWindowSize";
import { MOBILE_SIZE } from "../../utils/convert";
import AbilityModal from "../../components/modal/abilityModal/AbilityModal";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Detail = () => {
  const [currentPoke, setCurrentPoke] = useState<IPokemonList>();
  const currentAbility = useSelector(
    (state: RootState) => state.datas.currentAbility
  );
  const windowSize = useWindowSize();

  useEffect(() => {
    const item = sessionStorage.getItem("currentPoke");
    if (item) {
      const poke = JSON.parse(item);
      setCurrentPoke(poke);
    }
  }, []);

  return (
    <div className={styles.detail}>
      {currentPoke &&
        (windowSize >= MOBILE_SIZE ? (
          <DesktopDetail currentPoke={currentPoke} />
        ) : (
          <MobileDetail currentPoke={currentPoke} />
        ))}
      {currentAbility && <AbilityModal />}
    </div>
  );
};

export default Detail;
