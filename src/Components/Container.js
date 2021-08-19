import React, { useState, Fragment } from "react";
import Form from "./Form/Form";
import List from "./List/List";
import { v4 as uuidv4 } from "uuid";

import classes from "./Container.module.css";
import Modal from "./UI/Modal";
const Container = () => {
  const [people, setPeople] = useState([]);
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(!show);
  };
  const AddUser = (user) => {
    console.log("this is your user", user);
    const newUser = { id: uuidv4(), user: user };
    setPeople(people.concat(newUser));
  };
  return (
    <Fragment>
      <Modal show={show} />
      <button onClick={showModal}>Show Modal</button>

      <Form AddUser={AddUser} />
      <List people={people} />
    </Fragment>
  );
};
export default Container;
