import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "./MobileDetailHeader.module.scss";
import { IPokemonList } from "../../../../interface/IPokemonList";
import { getColor } from "../../../../utils/convert";
import { useBookList } from "../../../../hooks/useBookList";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import AddBookModal from "../../../modal/addBookModal/AddBookModal";

type Props = {
  currentPoke: IPokemonList;
};

const MobileDetailHeader = ({ currentPoke }: Props) => {
  const { addPokeBook, bookPokeList, onRemove } = useBookList();
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
          color: getColor(currentPoke?.types![0]),
        }}
        onClick={onCloseBtn}
      />
      <div className={styles.num}>
        <span>
          No.{currentPoke?.id} {currentPoke.name}
        </span>
        {bookPokeList.find(
          (item: IPokemonList) => item.id === currentPoke.id
        ) ? (
          <BsHeartFill
            className={styles.heart}
            onClick={() => onRemove(currentPoke)}
          />
        ) : (
          <BsHeart
            className={styles.emptyHeart}
            onClick={() => addPokeBook(currentPoke, () => setOnBookModal(true))}
          />
        )}
      </div>
      <div
        className={styles.generate}
        style={{ borderColor: getColor(currentPoke?.types![0]) }}
      >
        {currentPoke.generate}
      </div>
      {onBookModal && <AddBookModal onCloseBookModal={onCloseBookModal} />}
    </div>
  );
};

export default MobileDetailHeader;
