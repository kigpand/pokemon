import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { removeBookPokeList, setBookPokeList } from "../reducers/pokemon";
import { IPokemonList } from "../interface/IPokemonList";

export const useBookList = () => {
  const dispatch = useDispatch();
  const bookPokeList = useSelector(
    (state: RootState) => state.pokemon.bookPokeList
  );

  function addPokeBook(pokeItem: IPokemonList, callback: Function) {
    const result = bookPokeList.find(
      (pokeList: IPokemonList) => pokeList.id === pokeItem.id
    );
    if (result) {
      alert("이미 도감에 등록된 포켓몬입니다.");
      return;
    }
    dispatch(setBookPokeList(pokeItem));
    callback();
  }

  function onRemove(item: IPokemonList) {
    const list = { list: item };
    dispatch(removeBookPokeList(list));
  }

  return { bookPokeList, addPokeBook, onRemove };
};
