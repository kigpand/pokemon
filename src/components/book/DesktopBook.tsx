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
  margin: 20px 0px;
`;

const ListWrapper = styled.ul`
  width: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 200px);
  gap: 40px;
  list-style: none;
`;

const ListStyled = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  .removeBtn {
    font-size: 50px;
    padding: 10px;
    z-index: 100;
    position: absolute;
    right: 0px;

    &:hover {
      color: red;
      cursor: pointer;
    }
  }
`;
