import { Component } from 'react';
import PhonebookForm from './PhonebookForm/PhonebookForm';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts')
    const parseContacts = JSON.parse(contacts)
    if(parseContacts){
      this.setState({contacts:parseContacts})
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(this.state.contacts !== prevState.contacts){
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  eventFilterContacts = e => {
    this.setState({ filter: e.target.value });
  };

  addContacts = contacts => {
    this.setState(prewState => {
      return {
        contacts: [...prewState.contacts, contacts],
      };
    });
  };

  getVisibleContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  handleDeleteContact = (id) => {
    this.setState(prewState => ({
      contacts: prewState.contacts.filter(contact => contact.id !== id),
    }))
  }

  render() {
    const { filter } = this.state;
    const visibleContact = this.getVisibleContacts();

    return (
      <>
        <h1>Phonebook</h1>
        <PhonebookForm
          contacts={this.state.contacts}
          addContacts={this.addContacts}
        />
        <h2>Contacts</h2>
        <Filter value={filter} filterContacts={this.eventFilterContacts} />
        <Contacts contacts={visibleContact} deleteContact={this.handleDeleteContact}/>
      </>
    );
  }
}
