import PropTypes from 'prop-types';
import css from './Filter.module.css'

const Filter = ({ value, filterContacts }) => {
  return (
    <div className={css.wrapper}>
        <input className={css.inputFilter} onChange={filterContacts} type="text" name="filter" value={value} />
    </div>
    
  );
};
Filter.propTypes = {
    value: PropTypes.string.isRequired,
    filterContacts:PropTypes.func.isRequired,
}
export default Filter;

