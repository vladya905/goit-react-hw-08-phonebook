import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/contactsOperations';
import { getVisibleContacts } from '../../redux/contactsSelectors';
import css from './ContactList.module.css'

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.TaskList}>
      {contacts.map(contact => (
        <li className={css.TaskList_item} key={contact.id}>
          {contact.name}:{contact.phone}

          <button
            className={css.TaskList_button}
            type="button"
            name="delete"
            onClick={() => handleDeleteContact(contact.id)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;