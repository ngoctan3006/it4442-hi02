import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';
import * as api from './personnelAPI';

const initialState = {
  loading: false,
  page: 1,
  total: 1,
  personnel: [],
};

export const getPersonnel = createAsyncThunk('personnel/getPersonnel', async () => {
  const res = await api.fetchUser();
  return res.data;
});

export const personnelSlice = createSlice({
  name: 'personnel',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    endLoading: (state) => {
      state.loading = false;
    },
    addUser: (state, action) => {
      state.personnel.push(action.payload);
    },
    editUser: (state, action) => {
      state.personnel = state.personnel.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    removeUser: (state, action) => {
      state.personnel = state.personnel.filter((user) => user.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPersonnel.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPersonnel.fulfilled, (state, action) => {
        state.loading = false;
        state.personnel = action.payload;
      });
  },
});

export const { startLoading, endLoading, addUser, editUser, removeUser } = personnelSlice.actions;

export const createUser = (user) => async (dispatch) => {
  try {
    message.loading({
      content: 'Đang tạo tài khoản...',
      key: 'updatable',
    });
    const { data } = await api.createUser(user);
    dispatch(addUser(data));
    message.success({
      content: 'Đã thêm tài khoản thành công!',
      key: 'updatable',
      duration: 3,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = (id, work) => async (dispatch) => {
  try {
    message.loading({
      content: 'Đang chỉnh sửa công việc...',
      key: 'updatable',
    });
    const { data } = await api.updateUser(id, work);
    dispatch(editUser(data));
    message.success({
      content: 'Đã chỉnh sửa công việc thành công!',
      key: 'updatable',
      duration: 3,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    message.loading({
      content: 'Đang xóa công việc...',
      key: 'updatable',
    });
    await api.deleteUser(id);
    dispatch(removeUser(id));
    message.success({
      content: 'Đã xóa công việc thành công!',
      key: 'updatable',
      duration: 3,
    });
  } catch (error) {
    console.log(error);
  }
};

export const selectPersonnel = (state) => state.personnel.personnel;
export const selectLoading = (state) => state.personnel.loading;
export const selectPage = (state) => state.personnel.page;
export const selectTotal = (state) => state.personnel.total;

export default personnelSlice.reducer;
