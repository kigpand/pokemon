import { createSlice } from '@reduxjs/toolkit'
import { IPokemonList } from '../interface/IPokemonList';

interface InitState {
    pokemonList: IPokemonList[],
    currentPoke: null | IPokemonList,
    bookPokeList: IPokemonList[]
}

const initialState: InitState = {
    pokemonList: [],
    currentPoke: null,
    bookPokeList: []
}

export const counterSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setPokemonList: (state, action) => {
            state.pokemonList = [...state.pokemonList, ...action.payload];
        },
        setCurrentPoke: (state, action) => {
            sessionStorage.setItem('currentPoke', JSON.stringify(action.payload));
            state.currentPoke = {...action.payload};
        },
        setBookPokeList: (state, action) => {
            state.bookPokeList.push(action.payload);
        },
        removeBookPokeList: (state, action) => {
            state.bookPokeList = [...state.bookPokeList.filter((list: IPokemonList) => list.id !== action.payload.id)];
        }
    },
})

export const { setPokemonList, setCurrentPoke, setBookPokeList, removeBookPokeList } = counterSlice.actions

export default counterSlice.reducer;