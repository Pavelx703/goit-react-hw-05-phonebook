import React, { Component } from "react";
import Section from "./Sections/Sections";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import { v4 as uuidv4 } from "uuid";
import alertSlide from "./transitions/alert.module.css";
import { CSSTransition } from "react-transition-group";
import Alert from "./Alert/Alert";
import Title from "./Title/Title";
import slideTitle from "./transitions/slideTitle.module.css";
export default class App extends Component {
  state = {
    contacts: [
      { id: uuidv4(), name: "Rosie Simpson", number: "459-12-56" },
      { id: uuidv4(), name: "Hermione Kline", number: "443-89-12" },
      { id: uuidv4(), name: "Eden Clements", number: "645-17-79" },
      { id: uuidv4(), name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    exist: false,
    inOn: false,
  };
  addContact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    const nameIsOriginal = this.state.contacts
      .map((contact) => contact.name)
      .includes(name);

    this.setState((prevState) => {
      if (nameIsOriginal) {
        this.setState({ exist: true });
        return setTimeout(() => {
          this.setState({ exist: false });
        }, 2000);
      } else {
        return {
          contacts: [...prevState.contacts, contact],
        };
      }
    });
  };

  removeContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  componentDidMount() {
    console.log("componentDidMount");
    this.getFromlocalStorage();
    this.setState({ inOn: true });
  }

  getFromlocalStorage() {
    const persistedTask = localStorage.getItem("contacts");

    if (persistedTask) {
      this.setState({
        contacts: JSON.parse(persistedTask),
      });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }
  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <Section>
        <CSSTransition
          in={this.state.inOn}
          timeout={500}
          classNames={slideTitle}
          unmountOnExit
        >
          <Title />
        </CSSTransition>
        <ContactForm onAddContact={this.addContact} />

        <h2>Find contacts by name</h2>
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        {visibleContacts.length > 0 && (
          <ContactList
            contacts={visibleContacts}
            onRemoveContact={this.removeContact}
          />
        )}

        <CSSTransition
          in={this.state.exist}
          timeout={250}
          classNames={alertSlide}
          unmountOnExit
        >
          <Alert />
        </CSSTransition>
      </Section>
    );
  }
}
