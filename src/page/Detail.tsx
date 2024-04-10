import styled from "styled-components";
import DesktopDetail from "../components/detail/desktop/DesktopDetail";
import MobileDetail from "../components/detail/mobile/MobileDetail";
import { useEffect, useState } from "react";
import { IPokemonList } from "../interface/IPokemonList";
import { useWindowSize } from "../hooks/useWindowSize";
import { MOBILE_SIZE } from "../utils/convert";
import { useStorage } from "hooks/useStorage";

const Detail = () => {
  const [currentPoke, setCurrentPoke] = useState<IPokemonList>();
  const windowSize = useWindowSize();
  const { getCurrentPokeStorage } = useStorage();

  useEffect(() => {
    const item = getCurrentPokeStorage();
    if (item) setCurrentPoke(item);
  }, [getCurrentPokeStorage]);

  const onChangePoke = (poke: IPokemonList) => {
    setCurrentPoke(poke);
  };

  return (
    <DetailWrapper>
      {currentPoke &&
        (windowSize >= MOBILE_SIZE ? (
          <DesktopDetail
            currentPoke={currentPoke}
            onChangePoke={onChangePoke}
          />
        ) : (
          <MobileDetail currentPoke={currentPoke} />
        ))}
    </DetailWrapper>
  );
};

export default Detail;

const DetailWrapper = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
