import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCategory } from '../../features/categories/categorySlice';
import { useNavigate } from 'react-router-dom';

const CreateCategory = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createCategory({ name })).then(() => {
      navigate('/categories');
    });
  };

  return (
    <div>
      <h1>Create New Category</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Category Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Create Category</button>
      </form>
    </div>
  );
};

export default CreateCategory;
