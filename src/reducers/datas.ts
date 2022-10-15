import { createSlice } from '@reduxjs/toolkit'
import { ITypeKoData } from '../interface/IPokemonList';

interface InitState {
    typeLists: ITypeKoData[];
    currentType: string | null;
}


const initialState: InitState = {
    typeLists: [],
    currentType: null
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
            state.currentType = action.payload;
        }
    },
})

export const { setTypeLists, setCurrentType } = counterSlice.actions

export default counterSlice.reducer;