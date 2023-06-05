import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';
const initialState = {
  list: [
    { task: 'slap buhari', id: new Date().getTime().toString() + 1 },
    { task: 'kill the cat', id: new Date().getTime().toString() + 2 },
    { task: 'buy milk', id: new Date().getTime().toString() + 3 },
  ],
};

export const fetchList = createAsyncThunk('list/fetchList', () => {
  console.log('hello world');
  // try {
  //   const { data } = axios.get('/api/tasks');
  //   console.log(data);
  //   return data;
  // } catch (error) {
  //   console.log(error);
  // }
});

const listSlice = createSlice({
  name: 'taskList',
  initialState,
  reducers: {
    addToList: (state, action) => {
      const newTask = action.payload;
      state.list.push({ task: newTask, id: new Date().getTime().toString() });
    },
    removeItem: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
      toast.error('item removed');
    },
    // setText: (state, action)
    editItem: (state, action) => {
      const itemToEdit = state.list.find((item) => item.id === action.payload);
      console.log(itemToEdit.task);
    },
    clearList: (state) => {
      state.list = [];
      toast.success('list cleared');
    },
  },
});

export const { addToList, removeItem, editItem, clearList } = listSlice.actions;
export default listSlice.reducer;
