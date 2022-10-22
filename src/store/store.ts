import { combineReducers, configureStore } from '@reduxjs/toolkit'
import pokemon from '../reducers/pokemon';
import datas from '../reducers/datas';

const rootReducer = combineReducers({
  pokemon: pokemon,
  datas: datas
})

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});