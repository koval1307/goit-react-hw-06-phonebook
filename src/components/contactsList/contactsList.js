import React from "react";
import {connect} from "react-redux"
import styles from "./contacts-list.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import  ContactListItem from "../contactListItem/contactListItem";
function ContactList({ contactList, }) {
  return (
    <TransitionGroup
      component="ul"
      
      className={styles.contact__list}
    >
      {contactList.map(({id}) => {
        return (
          <CSSTransition key={id} timeout={250} unmountOnExit
           classNames={styles}>
            <ContactListItem
              key={id}
         id={id}
            />
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
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

export default connect(mapStateToProps, ) (ContactList);
