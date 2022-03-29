import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../config/axios';

export const loginUser = createAsyncThunk(
  'login/userLogin',
  async ({ email, password, userName, confirmPassword }, { rejectWithValue }) => {
    const response = {
      email,
      password,
      userName,
      confirmPassword,
    };
    try {
      const { data } = await instance.post('/login', response);
      localStorage.setItem('token', data.generateAccessToken);
      window.location.href = '/admin';
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  success: null,
  loading: null,
  error: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  extraReducers: {
    [loginUser.pending]: (state, { payload }) => {
      console.log('36', payload);
      state.success = false;
      state.loading = true;
      state.error = null;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      console.log('42', payload);
      state.loading = false;
      state.success = true;
    },
    [loginUser.rejected]: (state, { payload }) => {
      console.log('47', payload);
      state.success = false;
      state.loading = false;
      state.error = payload;
      localStorage.removeItem('token');
    },
  },
});

export default loginSlice.reducer;
