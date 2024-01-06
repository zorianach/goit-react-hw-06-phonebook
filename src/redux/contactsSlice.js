import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    contacts: [    
        { "id": "id-1", "name": "Rosie Simpson", "number": "459-12-56" },
        { "id": "id-2", "name": "Hermione Kline", "number": "443-89-12" },
        { "id": "id-3", "name": "Eden Clements", "number": "645-17-79" },
        { "id": "id-4", "name": "Annie Copeland", "number": "227-91-26" }
]};

export const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContact:{
            prepare: ({name, number}) => {
				const newContact = {
					id: nanoid(),
                    name,
                    number,
				}
                return { payload: newContact }
            },
            reducer: (state, {payload})=> {
            state.contacts.push(payload);
            
            // return [...state, payload];

        }},

        deleteContact: (state, {payload})=>{
            state.contacts = state.contacts.filter((el) => el.id !== payload);
        }
    }
})

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;