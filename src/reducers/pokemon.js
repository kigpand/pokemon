import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    generate: null,
    pokemonList: [],
    currentPoke: null,
    generateList: ['1세대', '2세대', '3세대', '4세대', '5세대', '6세대', '7세대', '8세대']
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
        },
        setGenerateList: (state, action) => {
            state.generateList = [...action.payload];
        }
    },
})

export const { setGenerate, setPokemonList, setCurrentPoke, setGenerateList } = counterSlice.actions

export default counterSlice.reducer;