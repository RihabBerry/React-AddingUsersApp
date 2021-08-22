import React, { useState, Fragment } from "react";
import Form from "./Form/Form";
import List from "./List/List";
import { v4 as uuidv4 } from "uuid";
import classes from "./Container.module.css";

const Container = () => {
  const [people, setPeople] = useState([]);

  const AddUser = (user) => {
    const newUser = { id: uuidv4(), user: user };
    setPeople(people.concat(newUser));
  };
  return (
    <Fragment>
      <Form AddUser={AddUser} />
      <List people={people} />
    </Fragment>
  );
};
export default Container;
