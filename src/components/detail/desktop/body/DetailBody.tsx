import { IPokemonList } from "../../../../interface/IPokemonList";
import styles from "./DetailBody.module.scss";
import React from "react";
import { getLineColor } from "../../../../utils/convert";
import BookComponent from "../../bookComponent/BookComponent";
import DetailImg from "./detailImg/DetailImg";
import DetailMain from "./detailMain/DetailMain";

interface IDetailBody {
  currentPoke: IPokemonList;
  megaPoke: IPokemonList | IPokemonList[] | null;
  onChangeOrigin: () => void;
  onChangeMegaPoke: () => void;
  onChangeDymaxImg: (img: string) => void;
}

const DetailBody = (props: IDetailBody) => {
  return (
    <div
      className={styles.body}
      style={{ borderColor: getLineColor(props.currentPoke!.types![0]) }}
    >
      <BookComponent poke={props.currentPoke} />
      <DetailImg {...props} />
      <DetailMain poke={props.currentPoke} />
    </div>
  );
};

export default React.memo(DetailBody);
