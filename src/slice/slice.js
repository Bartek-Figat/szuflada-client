import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../config/axios';

const userLogin = createAsyncThunk('login/userLogin', async (dispatch, state) => {
  console.log('dispatch: -> 5', dispatch);
  console.log('state: -> 6', state);
  await instance.post('/registration');
});

const initialState = {
  email: '',
  password: '',
  userName: '',
  status: null,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  extraReducers: {
    [userLogin.pending]: (state, action) => {
      state.status = 'loading';
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      console.log('payload: -> 25', payload);
      state.email = payload.email;
      state.password = payload.password;
      state.userName = payload.userName;
      state.status = 'success';
    },
    [userLogin.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export default loginSlice.reducer;
