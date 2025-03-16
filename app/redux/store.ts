import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Importa tus reducers combinados

const store = configureStore({
  reducer: rootReducer,
});

// Inferir tipos de RootState y AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
