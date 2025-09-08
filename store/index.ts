import { configureStore } from '@reduxjs/toolkit';

// Configure the Redux store. Empty reducer map for now.
export const store = configureStore({
  reducer: {},
});

// Infer types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
