import { Notify } from "notiflix";

export const getContacts = store => store.contacts;
// console.log( )

export const getFilter = store => {
    // console.log('store.filter', store.filter)
    return store.filter; 
}

export const getFilteredContacts = store => {
    // const { filter, contacts } = store;//     
    const {contacts} = getContacts(store); 
    const filter = getFilter(store); 
// console.log('filter', filter)
    if (!filter) {
        // console.log('!filter', filter)
      return contacts;
    } else {
        // console.log('filter, contacts', filter, contacts)  

        const normalizedFilter = filter.toLowerCase();
        // console.log('normalizedFilter', normalizedFilter)
        const filteredContacts = contacts.filter(
            ({ name, number }) => name.toLowerCase().trim().includes(normalizedFilter) || number.trim().includes(normalizedFilter)
        );
        
        if (normalizedFilter && !filteredContacts.length) {
        Notify.failure(`No contacts matching your request`);
      }
    return filteredContacts}
  };