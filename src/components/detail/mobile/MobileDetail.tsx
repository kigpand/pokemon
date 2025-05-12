import { useCallback, useEffect, useState } from "react";
import type { IPokemonList } from "interface/IPokemonList";
import { useMega } from "hooks/useMega";
import MobileDetailInfo from "./MobileDetailInfo";
import MobileDetailHeader from "./MobileDetailHeader";
import MobileDetailGenus from "./MobileDetailGenus";
import MobileDetailType from "./MobileDetailType";
import MobileDetailAbility from "./MobileDetailAbility";
import MobileDetailStatus from "./MobileDetailStatus";
import MobileDetailLayout from "./MobileDetailLayout";
import styled from "styled-components";
import MegaModal from "components/modal/MegaModal";
import { useStorage } from "hooks/useStorage";

type DetailArray = {
  title: string;
  component: React.ReactNode;
};

function makeArray(poke: IPokemonList | null): DetailArray[] {
  if (!poke) return [];
  return [
    {
      title: "분류",
      component: <MobileDetailGenus genus={poke.genus} />,
    },
    {
      title: "타입",
      component: <MobileDetailType types={poke.types!} />,
    },
    {
      title: "특성",
      component: <MobileDetailAbility abilities={poke.abilities} />,
    },
    {
      title: "종족값",
      component: <MobileDetailStatus poke={poke} />,
    },
  ];
}

const MobileDetail = () => {
  const { getCurrentPokeStorage } = useStorage();
  // 현재 적용중인 포켓몬
  const [currentPoke, setCurrentPoke] = useState<IPokemonList | null>(
    getCurrentPokeStorage()
  );
  const [originPoke, setOriginPoke] = useState<IPokemonList | null>(
    currentPoke
  );
  const [megaModal, setMegaModal] = useState<boolean>(false);
  const detailArray = makeArray(originPoke);
  const { megaPoke } = useMega(currentPoke);

  useEffect(() => {
    setCurrentPoke(getCurrentPokeStorage());
  }, [getCurrentPokeStorage]);

  const onChangeMega = useCallback(() => {
    if (!megaPoke) return;
    if (Array.isArray(megaPoke)) {
      setMegaModal(true);
    } else {
      setOriginPoke(megaPoke);
    }
  }, [megaPoke]);

  if (!originPoke || !currentPoke) return null;

  return (
    <>
      {originPoke?.types && (
        <Container>
          <MobileDetailHeader poke={originPoke} />
          <MobileDetailInfo
            poke={originPoke}
            currentPoke={currentPoke}
            megaPoke={megaPoke || null}
            onChangeOrigin={() => setOriginPoke(currentPoke)}
            onChangeMega={onChangeMega}
            onChangeDymax={(dymax) =>
              setOriginPoke({ ...currentPoke, imageUrl: dymax })
            }
          />
          {detailArray.map((item: DetailArray, i: number) => {
            return (
              <MobileDetailLayout
                key={i}
                types={originPoke.types!}
                title={item.title}
                component={item.component}
              />
            );
          })}
          <b style={{ paddingLeft: "5px", fontWeight: "bold" }}>정보</b>
          <FlovarStyled>{originPoke?.flavor}</FlovarStyled>
        </Container>
      )}
      {megaModal && Array.isArray(megaPoke) && (
        <MegaModal
          megaPoke={megaPoke}
          onChangeMega={(poke) => setOriginPoke(poke)}
          onCloseModal={() => setMegaModal(false)}
        />
      )}
    </>
  );
};

export default MobileDetail;

const Container = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const FlovarStyled = styled.div`
  font-size: 12px;
  margin-top: 5px;
`;
