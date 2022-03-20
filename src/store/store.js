import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../slice/singUpSlice';
import authentication from '../slice/authenticationSlice';

export const store = configureStore({
  reducer: {
    register: loginSlice,
    authentication,
  },
});
