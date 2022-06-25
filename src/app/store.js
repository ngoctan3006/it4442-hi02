import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import assignReducer from '../features/assign/assignSlice';
import personnelReducer from '../features/personnel/assignSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    assign: assignReducer,
    personnel: personnelReducer,
  },
});
