import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    setContacts: (state, action) => {
      state.items = action.payload;
    },
    addContact: (state, action) => {
      state.items.push(action.payload);
    },

    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { setContacts, addContact, deleteContact } = contactsSlice.actions;
export const selectContacts = (state) => state.contacts.items;
export const contactsReducer = contactsSlice.reducer;
