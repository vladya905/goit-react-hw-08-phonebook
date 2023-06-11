import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsOperations';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts.items);

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === '') {
      alert('Please enter a name');
      return;
    }

    if (number === '') {
      alert('Please enter a phone number');
      return;
    }

    const existingContact = contacts.find(contact => contact.name === name);

    if(existingContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const contact = {
      name,
      phone: number
    };

    dispatch(addContact(contact));

    setName('');
    setNumber('');
  };

  return (
    <form className={css.TaskEditor} onSubmit={handleSubmit}>
      <label className={css.TaskEditor_label}>
        Name
        <input
          className={css.TaskEditor_input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label className={css.TaskEditor_label}>
        Number
        <input
          className={css.TaskEditor_input}
          type="text"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <button className={css.TaskEditor_button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;