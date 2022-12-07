import { createSlice } from '@reduxjs/toolkit'

interface InitState {
    currentType: string | null;
    scrollPoint: number;
    currentAbility: string | null;
}


const initialState: InitState = {
    currentType: null,
    scrollPoint: 0,
    currentAbility: null
}

export const counterSlice = createSlice({
    name: 'datas',
    initialState,
    reducers: {
        setCurrentType: (state, action) => {
            sessionStorage.setItem('currentType', action.payload);
            state.currentType = action.payload;
        },
        setScrollPoint: (state, action) => {
            state.scrollPoint = action.payload;
        },
        setCurrentAbility: (state, action) => {
            state.currentAbility = action.payload;
        }
    },
})

export const { setCurrentType, setScrollPoint, setCurrentAbility } = counterSlice.actions

export default counterSlice.reducer;