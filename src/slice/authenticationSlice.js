import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../config/axios';

export const authenticationPage = createAsyncThunk('auth/authToken', async (params, thunkAPI) => {
  try {
    await instance.get(`/activate/${params.token}`);
  } catch (err) {
    thunkAPI.rejectWithValue(err.response.data.status);
  }
});

const initialState = {
  status: null,
};

export const authentication = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authenticationPage.pending]: (state, action) => {
      state.status = 'loading';
    },
    [authenticationPage.fulfilled]: (state, { payload }) => {
      state.status = 'success';
    },
    [authenticationPage.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export default authentication.reducer;
