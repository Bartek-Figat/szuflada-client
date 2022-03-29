import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../slice/singUpSlice';
import authentication from '../slice/authenticationSlice';
import login from '../slice/loginSlice';

export const store = configureStore({
  reducer: {
    register: loginSlice,
    authentication,
    login,
  },
});
