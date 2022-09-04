import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    generate: null,
    currentPoke: null,
    generateList: ['1세대', '2세대']
}

export const counterSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setGenerate: (state, action) => {
            state.generate = action.payload;
        },
        setCurrentPoke: (state, action) => {
            state.currentPoke = {...action.payload};
        },
        setGenerateList: (state, action) => {
            state.generateList = [...action.payload];
        }
    },
})

export const { setGenerate, setCurrentPoke, setGenerateList } = counterSlice.actions

export default counterSlice.reducer;