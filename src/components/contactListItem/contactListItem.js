import React from "react";
import Button from "@material-ui/core/Button";
import styles from "../contactsList/contacts-list.module.css";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts-actions";

function ContactListItem({ id, name, number, deleteContact }) {
  return (
    <li className={styles.contactList__item}>
      <div className={styles.contacts}>
        <span className={styles.name}>{name}</span>
        <span className={styles.tel}>: {number}</span>
      </div>
      <Button
        className={styles.btn}
        variant="contained"
        color="secondary"
        type="button"
        id={id}
        onClick={deleteContact}
      >
        delete Contact
      </Button>
    </li>
  );
}
const mapStateToProps = (state, ownProps) => {
  const item = state.contacts.items.find((item) => item.id === ownProps.id);
  console.log(item);
  return {
    ...item,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteContact: () => dispatch(contactsActions.deleteContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
