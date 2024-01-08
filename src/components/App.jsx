import { useState } from "react";
import AddContactForm from "./Forms/AddContactForm";
import Section from "./Section/Section";
import ContactList from "./ContactList/ContactList";
// import data from '../components/contacts.json'
// import { nanoid } from "nanoid";
// import { Notify } from "notiflix";
import Filter from "./Filter/Filter";
// import useLocalStorage from "./hooks/useLocalStorage";
import Layout from "./Layout/Layout";

export const App = () => {
 
  return (
    <>
    <Layout>
      <Section title="Phonebook">
        <AddContactForm />
      </Section>
      <Section title="Contacts">
        <Filter/>
        <ContactList />
      </Section>
    </Layout>
    </>
  );
};

// export default {App};
