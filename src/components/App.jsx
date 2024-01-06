import { useState } from "react";
import AddContactForm from "./Forms/AddContactForm";
import Section from "./Section/Section";
import ContactList from "./ContactList/ContactList";
// import data from '../components/contacts.json'
// import { nanoid } from "nanoid";
import { Notify } from "notiflix";
import Filter from "./Filter/Filter";
import useLocalStorage from "./hooks/useLocalStorage";

export const App = () => {
  // const [contacts, setContacts] = useLocalStorage('contacts', data);
  // const [filter, setFilter] = useState('');

  // const filteredContacts = () => {
  //   // const { filter, contacts } = this.state;
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // const deleteContacts = (contactId, name) => {
  //   setContacts(prevState => (
  //     prevState.filter(contact => contact.id !== contactId)), Notify.info(`Contact ${name} has been deleted from your Contacts`)
  //   );
  // };

  // const listedContacts = filteredContacts();

  return (
    <>
  
    <Section title="Phonebook">
      <AddContactForm />
    </Section>
    <Section title="Contacts">
      <Filter/>
      <ContactList />
    </Section>
    </>
  );
};

// export default {App};
