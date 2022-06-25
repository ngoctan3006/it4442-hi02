import { configureStore } from '@reduxjs/toolkit';
import assignReducer from '../features/assign/assignSlice';
import counterReducer from '../features/counter/counterSlice';
import personnelReducer from '../features/personnel/personnelSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    assign: assignReducer,
    personnel: personnelReducer,
  },
});
