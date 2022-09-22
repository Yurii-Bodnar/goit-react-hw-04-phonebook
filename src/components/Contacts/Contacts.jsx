import PropTypes from 'prop-types';
import css from './Contacts.module.css'

const Contacts = ({ contacts,deleteContact }) => {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {contacts.map(contact => {
          return (
            <li key={contact.id} className={css.item}>
              <p className={css.text}>
                {contact.name}: <span>{contact.number}</span>
              </p>
              <button className={css.btn} onClick={()=>deleteContact(contact.id)} type="button">Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Contacts.propTypes = {
    contacts:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        number:PropTypes.string.isRequired,
    }))
}

export default Contacts;
