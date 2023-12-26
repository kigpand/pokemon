import { createSlice } from "@reduxjs/toolkit";

interface InitState {
  currentAbility: string | null;
  theme: "light" | "dark";
}

const initialState: InitState = {
  currentAbility: null,
  theme: "light",
};

export const counterSlice = createSlice({
  name: "datas",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setCurrentAbility: (state, action) => {
      state.currentAbility = action.payload;
    },
  },
});

export const { setCurrentAbility, setTheme } = counterSlice.actions;

export default counterSlice.reducer;
