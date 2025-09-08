import { createSlice } from '@reduxjs/toolkit';

export type AppState = {
  ready: boolean;
};

const initialState: AppState = {
  ready: true,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});

// Selector (typed to the expected state shape when registered)
export const selectAppReady = (state: { app: AppState }) => state.app.ready;

export default appSlice.reducer;
