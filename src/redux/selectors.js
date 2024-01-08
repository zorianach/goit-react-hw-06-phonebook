import { paramsForNotify } from "components/paramsForNotify";
import { Notify } from "notiflix";

export const getContacts = state => state.contacts;
// console.log( )

export const getFilter = state => {
    // console.log('store.filter', store.filter)
    return state.filter; 
}

export const getFilteredContacts = state => {
    // const { filter, contacts } = store;//     
    const {contacts} = getContacts(state); 
    const filter = getFilter(state); 
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
        Notify.failure(`No contacts matching your request`, paramsForNotify);
      }
    return filteredContacts}
  };