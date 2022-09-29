import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    generate: 'all',
    pokemonList: [],
    currentPoke: null,
}

export const counterSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setGenerate: (state, action) => {
            state.generate = action.payload;
        },
        setPokemonList: (state, action) => {
            state.pokemonList = [...action.payload];
        },
        setCurrentPoke: (state, action) => {
            state.currentPoke = {...action.payload};
        }
    },
})

export const { setGenerate, setPokemonList, setCurrentPoke } = counterSlice.actions

export default counterSlice.reducer;