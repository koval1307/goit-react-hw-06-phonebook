import React from "react";

import Form from "./components/form/Form";
import ContactList from "./components/contactsList/contactsList";
import Filter from "./components/filter/Filter";
import styles from "./global.module.css";
import AppTitle from "../src/components/appTitle/AppTitle";

const App = () => {
  return (
    <div className={styles.wrapper}>
      <AppTitle />

      <Form />

      <Filter></Filter>
      <ContactList></ContactList>
    </div>
  );
};

export default App;
