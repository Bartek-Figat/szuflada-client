import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Navigate } from 'react-router-dom';
import { instance } from '../config/axios';

export const userReources = createAsyncThunk('user/fetchUser', async () => {
  try {
    const token = localStorage.getItem('token');
    const { data } = await instance.get('/user', {
      credentials: 'include',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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
