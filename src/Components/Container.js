import React, { Fragment } from "react";
import Form from "./Form/Form";
import List from "./List/List";

const Container = () => {
  const people = [
    { Name: "Max", Age: "12" },
    { Name: "Alex", Age: "12" },
    { Name: "Henrik", Age: "12" },
    { Name: "Moez", Age: "12" },
  ];

  return (
    <Fragment>
      <Form />
      <List people={people} />
    </Fragment>
  );
};
export default Container;
