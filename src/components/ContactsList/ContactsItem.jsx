import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContacts } from '../../redux/contacts/slice';

export const ContactsItem = ({ name, id, number }) => {
  const dispatch = useDispatch();

  return (
    <li id={id} name={name}>
      {name}: {number}
      <button type="button" onClick={() => dispatch(removeContacts(id))}>
        Delete
      </button>
    </li>
  );
};

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
