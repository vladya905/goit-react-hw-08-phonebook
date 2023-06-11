import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import { getVisibleContacts } from '../redux/contactsSelectors';

const App = () => {
  const [filter, setFilter] = useState('');
  const contacts = useSelector(getVisibleContacts);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Provider store={store}>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter onFilterChange={setFilter} />
        <ContactList contacts={filteredContacts} />
      </div>
    </Provider>
  );
};

export default App;