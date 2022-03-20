import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../config/axios';

export const signupUser = createAsyncThunk(
  'login/userLogin',
  async ({ email, password, userName, confirmPassword }, thunkAPI) => {
    const data = {
      email,
      password,
      userName,
      confirmPassword,
    };
    try {
      await instance.post('/registration', data);
    } catch (err) {
      throw Error(err);
    }
  }
);

const initialState = {
  success: '',
  loading: null,
  error: null,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  extraReducers: {
    [signupUser.pending]: (state, action) => {
      state.success = '';
      state.loading = true;
      state.error = null;
    },
    [signupUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = 'Registration successful. Please Verify Your Email Address';
    },
    [signupUser.rejected]: (state, action) => {
      state.success = '';
      state.loading = false;
      state.error = action.error.name;
    },
  },
});

export default loginSlice.reducer;
