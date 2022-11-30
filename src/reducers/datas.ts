import { createSlice } from '@reduxjs/toolkit'
import { IType } from '../interface/IType';

interface InitState {
    typeLists: IType[];
    currentType: string | null;
    scrollPoint: number;
    currentAbility: string | null;
}


const initialState: InitState = {
    typeLists: [],
    currentType: null,
    scrollPoint: 0,
    currentAbility: null
}

export const counterSlice = createSlice({
    name: 'datas',
    initialState,
    reducers: {
        setTypeLists: (state, action) => {
            if (state.typeLists) {
                state.typeLists = [...state.typeLists, action.payload];
            } else {
                state.typeLists = [action.payload];
            }
        },
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

export const { setTypeLists, setCurrentType, setScrollPoint, setCurrentAbility } = counterSlice.actions

export default counterSlice.reducer;