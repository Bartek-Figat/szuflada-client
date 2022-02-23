import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../slice/slice';

export const store = configureStore({
  reducer: {
    login: loginSlice,
  },
});
