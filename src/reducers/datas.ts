import { createSlice } from '@reduxjs/toolkit'
import { IAbility } from '../interface/IAbility';
import { IType } from '../interface/IType';

interface InitState {
    typeLists: IType[];
    currentType: string | null;
    dataCount: number;
    scrollPoint: number;
    currentAbility: IAbility | null;
}


const initialState: InitState = {
    typeLists: [],
    currentType: null,
    dataCount: 1,
    scrollPoint: 100,
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
        setDataCount: (state,action) => {
            state.dataCount = action.payload;
        },
        setScrollPoint: (state, action) => {
            state.scrollPoint = action.payload;
        },
        setCurrentAbility: (state, action) => {
            state.currentAbility = action.payload;
        }
    },
})

export const { setTypeLists, setCurrentType, setDataCount, setScrollPoint, setCurrentAbility } = counterSlice.actions

export default counterSlice.reducer;