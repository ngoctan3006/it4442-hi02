import { configureStore } from '@reduxjs/toolkit';
import assignReducer from '../features/assign/assignSlice';
import authReducer from '../features/auth/authSlice';
import personnelReducer from '../features/personnel/personnelSlice';

export const store = configureStore({
  reducer: {
    assign: assignReducer,
    auth: authReducer,
    personnel: personnelReducer,
  },
});
