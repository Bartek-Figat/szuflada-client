import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Navigate } from 'react-router-dom';
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
      if (data.generateAccessToken) {
        localStorage.setItem('token', data.generateAccessToken);
        <Navigate to="/admin" replace />;
      }
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
      state.success = false;
      state.loading = true;
      state.error = '';
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.success = false;
      state.loading = false;
      state.error = payload.error;
    },
  },
});

export default loginSlice.reducer;
