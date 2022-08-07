import { ContactsItem } from './ContactsItem';
import { ContactsStyledList } from './ContactsList.styled';
import PropTypes from 'prop-types';

export const ContactsList = ({ contacts }) => {
  const contactsItems = contacts.map(({ name, id, number }) => {
    return <ContactsItem key={id} name={name} id={id} number={number} />;
  });

  return <ContactsStyledList>{contactsItems}</ContactsStyledList>;
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
