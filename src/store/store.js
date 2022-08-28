import { configureStore } from '@reduxjs/toolkit'
import pokemon from '../reducers/pokemon'

export const store = configureStore({
  reducer: {
    pokemon: pokemon
  },
});