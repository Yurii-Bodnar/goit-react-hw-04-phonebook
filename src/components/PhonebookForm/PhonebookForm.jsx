import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Component } from 'react';
import css from './PhonebookForm.module.css'

class PhonebookForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleSubmitt = e => {
    const { contacts, addContacts } = this.props;
    const { name, number } = this.state;
    e.preventDefault();
    const contact = { id: nanoid(), name: name, number: number };
    if (
      contacts.filter(contact => {
        return contact.name === name;
      }).length
    ) {
      return alert(`${name} in already in contacts`);
    }
    addContacts(contact);
    this.reset();
  };

  render() {
    const id = nanoid();

    return (
      <>
        <form className={css.container} onSubmit={this.handleSubmitt}>
          <label htmlFor={id}>
            <p className={css.text}>Name</p>
            <input className={css.inputValue}
              onChange={this.handleChange}
              type="text"
              name="name"
              value={this.state.name}
              id={this.id}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label htmlFor={id}>
            <p className={css.text}>Number</p>
            <input className={css.inputValue}
              onChange={this.handleChange}
              type="tel"
              name="number"
              value={this.state.number}
              id={id}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button className={css.btn} type="submit">add conttact</button>
        </form>
      </>
    );
  }
}

PhonebookForm.propTypes = {
    contacts:PropTypes.arrayOf(PropTypes.shape(PropTypes.string.isRequired,)), 
    addContacts:PropTypes.func.isRequired,
}

export default PhonebookForm;
