import React from "react";
import {connect} from "react-redux"
import styles from "./contacts-list.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import contactsActions from "../../redux/contacts-actions";
import { ContactListItem } from "../contactListItem/contactListItem";
function ContactList({ contactList, deleteContact }) {
  return (
    <TransitionGroup
      component="ul"
      
      className={styles.contact__list}
    >
      {contactList.map((el) => {
        return (
          <CSSTransition key={el.id} timeout={250} unmountOnExit
           classNames={styles}>
            <ContactListItem
              key={el.id}
              contact={el}
              deleteContact={deleteContact}
            />
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
}

const mapDispatcToProps = {
  deleteContact: contactsActions.deleteContact
}
const mapStateToProps = (state) => {
  const { items, filter } = state.contacts
  const normalizedFilter = filter.toLowerCase();
  const existingContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter))
  return {
    contactList: existingContacts
  }
}

export default connect(mapStateToProps, mapDispatcToProps) (ContactList);
