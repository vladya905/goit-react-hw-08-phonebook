import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsFilter } from '../../redux/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.contacts.filter);

  const handleChange = (e) => {
    dispatch(contactsFilter(e.target.value));
  };

  return (
    <label>
      Filter contacts by name
      <input type="text" value={filter} onChange={handleChange} />
    </label>
  );
};

export default Filter;