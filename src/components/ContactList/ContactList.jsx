
import {  useDispatch, useSelector } from "react-redux";
import { ContactListStyle, ContactItem, Line, DeleteButton} from "./ContactList.styled";
import { getFilteredContacts } from "../../redux/selectors";
import { deleteContact } from "../../redux/contactsSlice";
import { Notify } from "notiflix";

const ContactList = () => {

    const contacts = useSelector(getFilteredContacts);
    // console.log('contacts', contacts)
    const dispatch = useDispatch();
 
    const onDeleteContact = (id, name) => {
        dispatch(deleteContact(id))
        return (Notify.info(`Contact ${name} has been deleted from your Contacts`))
 
      };
    return ( <ContactListStyle>
            {contacts.map(({name, number, id}) => {
                return (
                <>
                <ContactItem key={id} >
                    <Line>{name}: {number}</Line>
                    <DeleteButton type="button" onClick={() => onDeleteContact(id, name)}>Delete</DeleteButton>
                </ContactItem>
                </>
            )})}
        </ContactListStyle>
    );
            }
    export default ContactList;
 