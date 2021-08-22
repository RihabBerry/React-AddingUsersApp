import React, { Fragment } from "react";
import Item from "../Item/Item";
import Card from "../UI/Card";
import classes from "./List.module.css";

const List = (props) => {
  const people = props.people.map((e) => <Item individual={e} />);

  return (
    <Fragment>
      <Card>
        <ul>{people}</ul>
      </Card>
    </Fragment>
  );
};
export default List;
