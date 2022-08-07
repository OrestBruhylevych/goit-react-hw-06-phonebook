import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { chagneFilter } from '../../redux/contacts/slice';

import { FilterStyled } from './Filter.styled';

export const Filter = ({ value }) => {
  const dispatch = useDispatch();

  return (
    <FilterStyled>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        name="filter"
        type="text"
        value={value}
        onChange={e => dispatch(chagneFilter(e.currentTarget.value))}
      />
    </FilterStyled>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
};
