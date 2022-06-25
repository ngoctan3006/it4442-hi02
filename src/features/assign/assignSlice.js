import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';
import * as api from './assignAPI';

const initialState = {
  loading: false,
  page: 1,
  total: 1,
  works: [],
};

export const getWorks = createAsyncThunk('assign/getWorks', async () => {
  const res = await api.fetchWorks();
  return res.data;
});

export const assignSlice = createSlice({
  name: 'assign',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    endLoading: (state) => {
      state.loading = false;
    },
    addWork: (state, action) => {
      state.works.push(action.payload);
    },
    editWork: (state, action) => {
      state.works = state.works.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    removeWork: (state, action) => {
      state.works = state.works.filter((work) => work.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWorks.pending, (state) => {
        state.loading = true;
      })
      .addCase(getWorks.fulfilled, (state, action) => {
        state.loading = false;
        state.works = action.payload;
      });
  },
});

export const { startLoading, endLoading, addWork, editWork, removeWork } = assignSlice.actions;

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

export const selectWorks = (state) => state.assign.works;
export const selectLoading = (state) => state.assign.loading;
export const selectPage = (state) => state.assign.page;
export const selectTotal = (state) => state.assign.total;

export default assignSlice.reducer;
