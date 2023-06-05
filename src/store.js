import { configureStore } from '@reduxjs/toolkit';
import formReducer from './features/Form/formSlice';
import listReducer from './features/Form/listSlice';

export const store = configureStore({
  reducer: {
    form: formReducer,
    taskList: listReducer,
  },
});
