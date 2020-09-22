import { combineReducers} from "redux";
// import { composeWithDevTools } from "redux-devtools-extension"
import {configureStore} from "@reduxjs/toolkit"
import contactsReducer from "./contacts-reducer";


// const store = createStore(rootReducer, composeWithDevTools());

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export default store