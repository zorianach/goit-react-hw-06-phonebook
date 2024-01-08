import AddContactForm from "./Forms/AddContactForm";
import Section from "./Section/Section";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
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
