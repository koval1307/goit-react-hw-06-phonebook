import { combineReducers } from "redux";
import { GET, DELETE, FILTER } from "./contacts-types";

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET:
      return [...state, payload];
    case DELETE:
      return state.filter((contact) => contact.id !== payload.id);
    default:
      return state;
  }
};

const filterReducer = (state = " ", { type, payload }) => {
  switch (type) {
    case FILTER:
      return payload.filter;
    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
