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
      thunkAPI.rejectWithValue(err.response.data.status);
    }
  }
);

const initialState = {
  status: null,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  extraReducers: {
    [signupUser.pending]: (state, action) => {
      state.status = 'loading';
    },
    [signupUser.fulfilled]: (state, { payload }) => {
      state.status = 'success';
    },
    [signupUser.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export const userSelector = (state) => state.user;
export default loginSlice.reducer;
