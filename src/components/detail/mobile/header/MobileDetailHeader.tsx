import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "./MobileDetailHeader.module.scss";
import { IPokemonList } from "../../../../interface/IPokemonList";
import { getColor } from "../../../../utils/convert";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AddBookModal from "../../../modal/addBookModal/AddBookModal";
import BookComponent from "../../bookComponent/BookComponent";

type Props = {
  poke: IPokemonList;
};

const MobileDetailHeader = ({ poke }: Props) => {
  const [onBookModal, setOnBookModal] = useState<Boolean>(false);
  const nav = useNavigate();

  function onCloseBtn() {
    sessionStorage.removeItem("currentPoke");
    nav(-1);
  }

  function onCloseBookModal() {
    setOnBookModal(false);
  }

  return (
    <div className={styles.header}>
      <AiOutlineCloseCircle
        className={styles.closeBtn}
        style={{
          color: getColor(poke?.types![0]),
        }}
        onClick={onCloseBtn}
      />
      <div className={styles.num}>
        <span>
          No.{poke?.id} {poke.name}
        </span>
        <BookComponent poke={poke} />
      </div>
      <div
        className={styles.generate}
        style={{ borderColor: getColor(poke?.types![0]) }}
      >
        {poke.generate}
      </div>
      {onBookModal && <AddBookModal onCloseBookModal={onCloseBookModal} />}
    </div>
  );
};

export default MobileDetailHeader;
