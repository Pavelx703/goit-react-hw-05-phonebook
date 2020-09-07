import React from "react";
import style from "./contactList.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import slide from "../transitions/slide.module.css";
const ContactList = ({ contacts, onRemoveContact }) => (
  <TransitionGroup component="ul" className={style.contactList}>
    {contacts.map(({ id, name, number }) => (
      <CSSTransition key={id} timeout={250} classNames={slide}>
        <li>
          <span>
            {name} : {number}
          </span>
          <button
            type="button"
            className={style.onDelete}
            onClick={() => onRemoveContact(id)}
          >
            Delete
          </button>
        </li>
      </CSSTransition>
    ))}
  </TransitionGroup>
);
export default ContactList;
