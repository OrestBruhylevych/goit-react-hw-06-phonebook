import { Box, StyledTitle } from './StyledComponent';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { MyForm } from './Form/MyForm';

import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from '../redux/contacts/slice';

export function App() {
  const dispatch = useDispatch();
  const contactsArray = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const addConntacts = value => {
    const nameLowerCase = value.name.toLowerCase();

    const newContact = contactsArray.find(
      contact => contact.name.toLocaleLowerCase() === nameLowerCase
    );

    if (newContact) {
      window.alert(`${value.name} is already in contacts.`);
      return;
    }

    dispatch(addContacts(value));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contactsArray.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return visibleContacts;
  };

  return (
    <Box as="main" p={4}>
      <StyledTitle>Phonebook</StyledTitle>

      <MyForm onSubmit={addConntacts} />

      <StyledTitle as="h2">Contacts</StyledTitle>

      <Filter value={filter} />

      <ContactsList contacts={getVisibleContacts()} />
    </Box>
  );
}
