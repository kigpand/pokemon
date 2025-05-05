import { useCallback, useState } from "react";
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

interface IMobileDetail {
  currentPoke: IPokemonList;
}

interface IDetailArray {
  title: string;
  component: React.ReactNode;
}

function makeArray(poke: IPokemonList): IDetailArray[] {
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

const MobileDetail = ({ currentPoke }: IMobileDetail) => {
  const [poke, setPoke] = useState<IPokemonList>(currentPoke);
  const [megaModal, setMegaModal] = useState<boolean>(false);
  const detailArray = makeArray(poke);
  const { megaPoke } = useMega(currentPoke);

  const onChangeMega = useCallback(() => {
    if (!megaPoke) return;
    if (Array.isArray(megaPoke)) {
      setMegaModal(true);
    } else {
      setPoke(megaPoke);
    }
  }, [megaPoke]);

  return (
    <>
      {poke?.types && (
        <Container>
          <MobileDetailHeader poke={poke} />
          <MobileDetailInfo
            poke={poke}
            currentPoke={currentPoke}
            megaPoke={megaPoke || null}
            onChangeOrigin={() => setPoke(currentPoke)}
            onChangeMega={onChangeMega}
            onChangeDymax={(dymax) =>
              setPoke({ ...currentPoke, imageUrl: dymax })
            }
          />
          {detailArray.map((item: IDetailArray, i: number) => {
            return (
              <MobileDetailLayout
                key={i}
                types={poke.types!}
                title={item.title}
                component={item.component}
              />
            );
          })}
          <b style={{ paddingLeft: "5px", fontWeight: "bold" }}>정보</b>
          <FlovarStyled>{poke?.flavor}</FlovarStyled>
        </Container>
      )}
      {megaModal && Array.isArray(megaPoke) && (
        <MegaModal
          megaPoke={megaPoke}
          onChangeMega={(poke) => setPoke(poke)}
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
