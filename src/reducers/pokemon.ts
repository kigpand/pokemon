import { createSlice } from '@reduxjs/toolkit'
import { IPokemonList } from '../interface/IPokemonList';

interface InitState {
    pokemonList: IPokemonList[],
    currentPoke: null | IPokemonList
}

const initialState: InitState = {
    pokemonList: [],
    currentPoke: null,
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
        }
    },
})

export const { setPokemonList, setCurrentPoke } = counterSlice.actions

export default counterSlice.reducer;