import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Navigate } from 'react-router-dom';
import { authAxios } from '../config/axios';

export const userReources = createAsyncThunk('user/fetchUser', async () => {
  try {
    const { data } = await authAxios.get('/user');
    return data;
  } catch (error) {
    if (!error.response) {
      localStorage.removeItem('token');
      <Navigate to="/" replace />;
      throw error;
    }
  }
});

const initialState = {
  user: [],
  error: '',
};

export const adminSlice = createSlice({
  name: 'login',
  initialState,
  extraReducers: {
    [userReources.pending]: (state, { payload }) => {
      state.error = null;
    },
    [userReources.fulfilled]: (state, { payload }) => {
      state.user = payload;
    },
    [userReources.rejected]: (state, { payload }) => {
      state.error = payload;
      localStorage.removeItem('token');
    },
  },
});

export default adminSlice.reducer;
