import { createSlice } from "@reduxjs/toolkit";

interface InitState {
  currentAbility: string | null;
}

const initialState: InitState = {
  currentAbility: null,
};

export const counterSlice = createSlice({
  name: "datas",
  initialState,
  reducers: {
    setCurrentAbility: (state, action) => {
      state.currentAbility = action.payload;
    },
  },
});

export const { setCurrentAbility } = counterSlice.actions;

export default counterSlice.reducer;
