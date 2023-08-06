import { IPokemonList } from "../../../../interface/IPokemonList";
import styles from "./DetailBody.module.scss";
import React from "react";
import { getLineColor } from "../../../../utils/convert";
import BookComponent from "../../bookComponent/BookComponent";
import DetailImg from "./detailImg/DetailImg";
import DetailMain from "./detailMain/DetailMain";

interface IDetailBody {
  currentPoke: IPokemonList;
  originPoke: IPokemonList;
  megaPoke: IPokemonList | IPokemonList[] | null;
  onChangeOrigin: () => void;
  onChangeMegaPoke: () => void;
  onChangeDymaxImg: (img: string) => void;
}

const DetailBody = ({
  currentPoke,
  megaPoke,
  originPoke,
  onChangeOrigin,
  onChangeMegaPoke,
  onChangeDymaxImg,
}: IDetailBody) => {
  return (
    <div
      className={styles.body}
      style={{ borderColor: getLineColor(currentPoke!.types![0]) }}
    >
      <DetailImg
        currentPoke={currentPoke}
        megaPoke={megaPoke}
        originPoke={originPoke}
        onChangeOrigin={onChangeOrigin}
        onChangeMegaPoke={onChangeMegaPoke}
        onChangeDymaxImg={onChangeDymaxImg}
      />
      <BookComponent poke={currentPoke} />
      <DetailMain poke={currentPoke} />
    </div>
  );
};

export default React.memo(DetailBody);
