import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  task: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    changeText: (state, action) => {
      state.task = action.payload;
    },
    clearText: (state) => {
      state.task = '';
    },
  },
});
export const { changeText, clearText } = formSlice.actions;
export default formSlice.reducer;
