import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useBookList } from "../../hooks/useBookList";
import { IPokemonList } from "../../interface/IPokemonList";
import { useState } from "react";
import { mobileWidth } from "styles/globalstyles";
import AddBookModal from "../modal/AddBookModal";
import styled from "styled-components";
import BookFullModal from "components/modal/BookFullModal";

type Props = {
  poke: IPokemonList;
};

const BookComponent = ({ poke }: Props) => {
  const { bookPokeList, onRemove, addPokeBook } = useBookList();
  const [onBookModal, setOnBookModal] = useState<Boolean>(false);
  const [isBookListFull, setIsBookListFull] = useState<boolean>(false);

  function handleAddBook() {
    if (bookPokeList.length < 6) {
      addPokeBook(poke, () => setOnBookModal(true));
    } else {
      setIsBookListFull(true);
    }
  }

  function handleBookFullRemove(item: IPokemonList) {
    onRemove(item);
    addPokeBook(poke, () => setOnBookModal(true));
    setIsBookListFull(false);
  }

  return (
    <>
      {bookPokeList.find((item: IPokemonList) => item.id === poke.id) ? (
        <HeartStyled onClick={() => onRemove(poke)} />
      ) : (
        <EmptyStyled onClick={handleAddBook} />
      )}
      {onBookModal && (
        <AddBookModal onCloseBookModal={() => setOnBookModal(false)} />
      )}
      {isBookListFull && (
        <BookFullModal
          handleBookFullRemove={handleBookFullRemove}
          handleClose={() => setIsBookListFull(false)}
        />
      )}
    </>
  );
};

export default BookComponent;

const HeartStyled = styled(BsHeartFill)`
  width: 35px;
  height: 35px;
  padding: 5px;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  color: red;
  animation: heartAnim 0.3s linear forwards;

  @media only screen and (max-width: ${mobileWidth}) {
    width: 30px;
    height: 30px;
    position: static;
    font-size: 30px;
    object-fit: contain;
    cursor: pointer;
  }

  @keyframes heartAnim {
    0% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const EmptyStyled = styled(BsHeart)`
  width: 35px;
  height: 35px;
  padding: 5px;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;

  &:hover {
    color: red;
  }

  @media only screen and (max-width: ${mobileWidth}) {
    width: 30px;
    height: 30px;
    position: static;
    font-size: 30px;
    object-fit: contain;
    cursor: pointer;
  }
`;
