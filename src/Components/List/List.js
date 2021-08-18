import React, { Fragment } from "react";
import Item from "../Item/Item";
import classes from "./List.module.css";

const List = (props) => {
  const people = props.people.map((e) => <Item individual={e} />);

  return (
    <Fragment>
      <div>
        <ul>{people}</ul>
      </div>
    </Fragment>
  );
};
export default List;
