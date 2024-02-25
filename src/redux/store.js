import { configureStore } from '@reduxjs/toolkit';
import { carsListSlice } from './slices.js/carsListSlice';
import { favoriteCarsList } from './slices.js/favoriteCarsSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const favoritePersistConfig = {
  key: 'favorite',
  storage,
  // whitelist: ['id'],
};
const CarsPersistConfig = {
  key: 'cars',
  storage,
  // whitelist: ['id'],
};
export const store = configureStore({
  reducer: {
    carsList: persistReducer(CarsPersistConfig, carsListSlice.reducer),
    favoriteCarsList: persistReducer(
      favoritePersistConfig,
      favoriteCarsList.reducer
    ),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});
export const persistor = persistStore(store);
