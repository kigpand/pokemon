import { createSlice } from "@reduxjs/toolkit";
import { IPokemonList } from "../interface/IPokemonList";
import { convertPokeData } from "utils/makeData";
import pokeData from "json/pokemonList.json";

interface InitState {
  pokemonList: IPokemonList[];
  currentList: IPokemonList[];
  bookPokeList: IPokemonList[];
}

const initialState: InitState = {
  pokemonList: convertPokeData(pokeData),
  currentList: [],
  bookPokeList: [],
};

export const counterSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemonList: (state, action) => {
      state.pokemonList = action.payload;
    },
    setCurrentList: (state, action) => {
      state.currentList = [...state.currentList, ...action.payload];
    },
    resetCurrentList: (state, action) => {
      state.currentList = action.payload;
    },
    setBookPokeList: (state, action) => {
      if (state.bookPokeList.length > 5) {
        state.bookPokeList.shift();
      }
      state.bookPokeList.push(action.payload);
    },
    removeBookPokeList: (state, action) => {
      state.bookPokeList = [
        ...state.bookPokeList.filter(
          (list: IPokemonList) => list.id !== action.payload.list.id
        ),
      ];
    },
  },
});

export const {
  setPokemonList,
  setBookPokeList,
  removeBookPokeList,
  setCurrentList,
  resetCurrentList,
} = counterSlice.actions;

export default counterSlice.reducer;
