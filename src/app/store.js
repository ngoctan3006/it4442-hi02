import { configureStore } from '@reduxjs/toolkit';
import assignReducer from '../features/assign/assignSlice';
import personnelReducer from '../features/personnel/personnelSlice';

export const store = configureStore({
  reducer: {
    assign: assignReducer,
    personnel: personnelReducer,
  },
});
