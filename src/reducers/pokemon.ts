import { createSlice } from '@reduxjs/toolkit'
import { IPokemonList } from '../interface/IPokemonList';

interface InitState {
    pokemonList: IPokemonList[],
    currentList: IPokemonList[],
    bookPokeList: IPokemonList[]
}

const initialState: InitState = {
    pokemonList: [],
    currentList: [],
    bookPokeList: []
}

export const counterSlice = createSlice({
    name: 'pokemon',
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
            if (state.bookPokeList.length > 6) {
                state.bookPokeList.shift();
            }
            state.bookPokeList.push(action.payload);
        },
        removeBookPokeList: (state, action) => {
            state.bookPokeList = [...state.bookPokeList.filter((list: IPokemonList) => list.id !== action.payload.id)];
        }
    },
})

export const { setPokemonList, setBookPokeList, removeBookPokeList, setCurrentList, resetCurrentList } = counterSlice.actions

export default counterSlice.reducer;