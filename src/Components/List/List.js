import React, { Fragment } from "react";
import Item from "../Item/Item";
import classes from "./List.module.css";

const List = (props) => {
  console.log("this is people", props.people);
  const people = props.people.map((e) => <Item individual={e} />);

  return (
    <Fragment>
      <ul>{people}</ul>
    </Fragment>
  );
};
export default List;
