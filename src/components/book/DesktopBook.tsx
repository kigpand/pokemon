import { IPokemonList } from "../../interface/IPokemonList";
import { useBookList } from "../../hooks/useBookList";
import { AiFillDelete } from "react-icons/ai";
import styled from "styled-components";
import PokemonList from "components/pokemonList/PokemonList";

const DesktopBook = () => {
  const { bookPokeList, onRemove } = useBookList();

  return (
    <DesktopWrapper>
      {bookPokeList.length > 0 && (
        <ListWrapper>
          {bookPokeList.map((item: IPokemonList, i: number) => {
            return (
              <ListStyled key={i}>
                <AiFillDelete
                  className="removeBtn"
                  onClick={() => onRemove(item)}
                />
                <PokemonList pokemon={item} />
              </ListStyled>
            );
          })}
        </ListWrapper>
      )}
    </DesktopWrapper>
  );
};

export default DesktopBook;

const DesktopWrapper = styled.article`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListWrapper = styled.ul`
  width: 100%;
  height: 450px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  list-style: none;
`;

const ListStyled = styled.li`
  display: flex;
  justify-content: center;
  position: relative;

  .removeBtn {
    font-size: 50px;
    padding: 10px;
    z-index: 100;
    position: absolute;
    top: 5px;
    right: 5px;

    &:hover {
      color: red;
      cursor: pointer;
    }
  }
`;
