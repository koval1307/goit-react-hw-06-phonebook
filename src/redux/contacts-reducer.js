import { combineReducers } from "redux";
import contactActions from "./contacts-actions"
import {createReducer} from "@reduxjs/toolkit"
const onGetContacts = (state, action) => [...state, action.payload];
const onDeleteContacts = (state, action) =>
    state.filter(contact => contact.id !== action.payload)


const itemsReducer = createReducer([], {
  [contactActions.getContacts]: onGetContacts ,
  [contactActions.deleteContact]: onDeleteContacts,
});
const filterReducer = createReducer(" ", {
  [contactActions.getFilter]: (_, action) => action.payload,
});

// const itemsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case contactActions.getContacts.type:
//       return [...state, payload];
//     case contactActions.deleteContact.type:
//       return state.filter((contact) => contact.id !== payload);
//     default:
//       return state;
//   }
// };



// const filterReducer = (state = " ", { type, payload }) => {
//   switch (type) {
//     case contactActions.getFilter.type:
//       return payload;
//     default:
//       return state;
//   }
// };

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
