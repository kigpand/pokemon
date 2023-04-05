import styles from "./Detail.module.scss";
import { useEffect, useState } from "react";
import { IPokemonList } from "../../interface/IPokemonList";
import DesktopDetail from "../../components/DetailView/desktop/DesktopDetail";
import MobileDetail from "../../components/DetailView/mobile/MobileDetail";
import { useWindowSize } from "../../hooks/useWindowSize";
import { MOBILE_SIZE } from "../../utils/convert";

const Detail = () => {
  const [currentPoke, setCurrentPoke] = useState<IPokemonList>();
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
    </div>
  );
};

export default Detail;
