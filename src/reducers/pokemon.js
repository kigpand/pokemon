import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    generate: 1,
    currentPoke: null,
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
        }
    },
})

export const { setGenerate, setCurrentPoke } = counterSlice.actions

export default counterSlice.reducer;