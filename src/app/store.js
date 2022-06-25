import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import assignReducer from '../features/assign/assignSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    assign: assignReducer,
  },
});
