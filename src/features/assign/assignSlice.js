import { createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';
import * as api from './assignAPI';

const initialState = {
  loading: false,
  pagination: {
    current: 1,
    total: 1,
  },
  works: [],
};

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
    fetchWorks: (state, action) => {
      state.works = action.payload.works;
      state.pagination = action.payload.pagination;
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
});

export const { startLoading, endLoading, fetchWorks, addWork, editWork, removeWork } =
  assignSlice.actions;

export const getWorks =
  (params = {}) =>
  async (dispatch) => {
    try {
      dispatch(startLoading());
      const { data, headers } = await api.fetchWorks(params);
      const res = {
        works: data,
        pagination: {
          current: params?.pagination?.current || 1,
          total: parseInt(headers['x-total-count']),
        },
      };
      dispatch(fetchWorks(res));
      dispatch(endLoading());
    } catch (error) {
      console.log(error);
    }
  };

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
export const selectPagination = (state) => state.assign.pagination;

export default assignSlice.reducer;
