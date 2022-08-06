import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const mySlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    chagneFilter(state, action) {},
    addContacts(state, action) {},
    removeContacts(state, action) {},
  },
});

export const store = configureStore({
  reducer: {
    contacts: mySlice.reducer,
  },
});
