import { createSlice } from '@reduxjs/toolkit';
import { contactsDefault } from '../../baseContacts';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: contactsDefault,
    filter: '',
  },
  reducers: {
    chagneFilter(state, action) {
      state.filter = action.payload;
    },
    addContacts(state, action) {
      state.items.push(action.payload);
    },
    removeContacts(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { chagneFilter, addContacts, removeContacts } =
  contactsSlice.actions;
