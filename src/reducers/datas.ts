import { createSlice } from '@reduxjs/toolkit'
import { ITypeKoData } from '../interface/IPokemonList';

interface InitState {
    typeLists: ITypeKoData[];
    currentType: string | null;
    dataCount: number;
}


const initialState: InitState = {
    typeLists: [],
    currentType: null,
    dataCount: 10,
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
    },
})

export const { setTypeLists, setCurrentType, setDataCount } = counterSlice.actions

export default counterSlice.reducer;