import { createSlice } from '@reduxjs/toolkit'

const initialState: any = {
    type: ''
}

export const counterSlice = createSlice({
    name: 'datas',
    initialState,
    reducers: {
        setType: (state, action) => {
            state.type = action.payload;
        }
    },
})

export const { setType } = counterSlice.actions

export default counterSlice.reducer;