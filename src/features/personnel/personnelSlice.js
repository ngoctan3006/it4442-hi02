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
  const res = await api.fetchWorks();
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
    addWork: (state, action) => {
      state.personnel.push(action.payload);
    },
    editWork: (state, action) => {
      state.personnel = state.personnel.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    removeWork: (state, action) => {
      state.personnel = state.personnel.filter((work) => work.id !== action.payload);
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

export const { startLoading, endLoading, addWork, editWork, removeWork } = personnelSlice.actions;

export const createWork = (work) => async (dispatch) => {
  try {
    message.loading({
      content: 'Đang tạo công việc...',
      key: 'updatable',
    });
    const { data } = await api.createWork(work);
    dispatch(addWork(data));
    message.success({
      content: 'Đã tạo công việc thành công!',
      key: 'updatable',
      duration: 3,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateWork = (id, work) => async (dispatch) => {
  try {
    message.loading({
      content: 'Đang chỉnh sửa công việc...',
      key: 'updatable',
    });
    const { data } = await api.updateWork(id, work);
    dispatch(editWork(data));
    message.success({
      content: 'Đã chỉnh sửa công việc thành công!',
      key: 'updatable',
      duration: 3,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteWork = (id) => async (dispatch) => {
  try {
    message.loading({
      content: 'Đang xóa công việc...',
      key: 'updatable',
    });
    await api.deleteWork(id);
    dispatch(removeWork(id));
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
