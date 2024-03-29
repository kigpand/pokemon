import { IPokemonList } from "../../../interface/IPokemonList";
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
import MegaModal from "../../modal/megaModal/MegaModal";

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
      component: <DetailGenus genus={poke.genus} />,
    },
    {
      title: "타입",
      component: <DetailType types={poke.types!} />,
    },
    {
      title: "특성",
      component: <DetailAbility abilities={poke.abilities} />,
    },
    {
      title: "종족값",
      component: <DetailStatus poke={poke} />,
    },
  ];
}

const MobileDetail = ({ currentPoke }: IMobileDetail) => {
  const [poke, setPoke] = useState<IPokemonList>(currentPoke);
  const detailArray = makeArray(poke);
  const { megaPoke } = useMega(currentPoke);
  const [megaModal, setMegaModal] = useState<boolean>(false);

  function onChangeOrigin() {
    setPoke(currentPoke);
  }

  function onChangeMega() {
    if (!megaPoke) return;
    if (!megaPoke) return;
    if (Array.isArray(megaPoke)) {
      setMegaModal(true);
    } else {
      setPoke(megaPoke);
    }
  }

  function onChangeModalMega(poke: IPokemonList) {
    setPoke(poke);
  }

  function onChangeDymax(dymax: string) {
    setPoke({ ...currentPoke, imageUrl: dymax });
  }

  return (
    <div className={styles.mobileDetail}>
      {poke?.types && (
        <div className={styles.container}>
          <MobileDetailHeader poke={poke} />
          <DetailInfo
            poke={poke}
            currentPoke={currentPoke}
            megaPoke={megaPoke || null}
            onChangeOrigin={onChangeOrigin}
            onChangeMega={onChangeMega}
            onChangeDymax={onChangeDymax}
          />
          {detailArray.map((item: IDetailArray, i: number) => {
            return (
              <DetailLayout
                key={i}
                types={poke.types!}
                title={item.title}
                component={item.component}
              />
            );
          })}
          <b style={{ paddingLeft: "5px" }}>정보</b>
          <div className={styles.flavor}>
            <div>{poke?.flavor}</div>
          </div>
        </div>
      )}
      {megaModal && Array.isArray(megaPoke) && (
        <MegaModal
          megaPoke={megaPoke}
          onChangeMega={onChangeModalMega}
          onCloseModal={() => setMegaModal(false)}
        />
      )}
    </div>
  );
};

export default MobileDetail;
