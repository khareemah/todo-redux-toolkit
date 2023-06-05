import React from 'react';
import { changeText, clearText } from '../features/Form/formSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addToList, clearList } from '../features/Form/listSlice';
import { ToastContainer, toast } from 'react-toastify';

import List from './List';

const Form = () => {
  const { task } = useSelector((state) => state.form);
  const { list } = useSelector((state) => state.taskList);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addToList(task));
    dispatch(clearText());
    toast.success('Item Added');
  };
  return (
    <>
      <form className='grocery-form' onSubmit={handleSubmit}>
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={task}
            onChange={(e) => dispatch(changeText(e.target.value))}
          />
        </div>
      </form>
      <List />
      {list.length > 1 && (
        <button className='clear-btn' onClick={() => dispatch(clearList())}>
          clear items
        </button>
      )}
    </>
  );
};

export default Form;
