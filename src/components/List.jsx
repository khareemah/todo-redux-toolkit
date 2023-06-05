import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { removeItem, editItem, fetchList } from '../features/Form/listSlice';

const List = () => {
  const { list } = useSelector((state) => state.taskList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchList());
  }, []);
  const handleEdit = (id, text) => {
    dispatch(editItem(id, text));
  };
  return (
    <div className='grocery-container'>
      {list.map((listItem) => {
        const { id, task } = listItem;
        return (
          <article className='grocery-item' key={id}>
            <p className='title'>{task}</p>
            <div className='btn-container'>
              <button
                type='button'
                className='edit-btn'
                onClick={() => handleEdit(id, 'hi world')}
              >
                <FaEdit />
              </button>
              <button
                type='button'
                className='delete-btn'
                onClick={() => dispatch(removeItem(id))}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
