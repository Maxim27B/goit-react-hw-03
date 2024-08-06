import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import css from './App.module.css';
import { nanoid } from 'nanoid';

const App = () => {
  const data = localStorage.getItem('contacts');
  const [contacts, setContacts] = useState(JSON.parse(data));
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onSearchContact = event => {
    const value = event.target.value;
    setFilterValue(value);
  };

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filterValue.toLowerCase());
  });

  const onAddContact = values => {
    const finalContact = { ...values, id: nanoid() };
    setContacts([finalContact, ...contacts]);
  };

  const onDeleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div className={css.appContainer}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox onSearchContact={onSearchContact} value={filterValue} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
};
export default App;
