import { createSlice } from '@reduxjs/toolkit'

interface InitState {
    scrollPoint: number;
    currentAbility: string | null;
}


const initialState: InitState = {
    scrollPoint: 0,
    currentAbility: null
}

export const counterSlice = createSlice({
    name: 'datas',
    initialState,
    reducers: {
        setScrollPoint: (state, action) => {
            state.scrollPoint = action.payload;
        },
        setCurrentAbility: (state, action) => {
            state.currentAbility = action.payload;
        }
    },
})

export const { setScrollPoint, setCurrentAbility } = counterSlice.actions

export default counterSlice.reducer;