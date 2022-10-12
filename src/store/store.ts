import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import pokemon from '../reducers/pokemon';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import datas from '../reducers/datas';

const rootReducer = combineReducers({
  pokemon: pokemon,
  datas: datas
})

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});