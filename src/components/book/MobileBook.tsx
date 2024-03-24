import { IPokemonList } from "../../interface/IPokemonList";
import { useBookList } from "../../hooks/useBookList";
import BookList from "./BookList";
import styled from "styled-components";

const MobileBook = () => {
  const { bookPokeList } = useBookList();

  return (
    <MobileWrapper>
      {bookPokeList.length > 0 &&
        bookPokeList.map((pokeList: IPokemonList) => {
          return <BookList key={pokeList.id} list={pokeList} />;
        })}
    </MobileWrapper>
  );
};

export default MobileBook;

const MobileWrapper = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
