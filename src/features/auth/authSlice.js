import * as api from './authAPI';
import { createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';

const initialState = {
  isAuthenticated: false,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    endLoading: (state) => {
      state.loading = false;
    },
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { startLoading, endLoading, login, logout } = authSlice.actions;

export const loginUser = (username) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const { data } = await api.login(username);
    dispatch(login(data));
    dispatch(endLoading());
  } catch (error) {
    dispatch(endLoading());
    message.error(error.message);
  }
};

export const selectAuth = (state) => state.auth.isAuthenticated;
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
