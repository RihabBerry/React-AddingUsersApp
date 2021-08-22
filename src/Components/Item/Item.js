import React from "react";
import classes from "./Item.module.css";

const Item = (props) => {
  return (
    <li key={props.individual.id}>
      <p>{props.individual.user}</p>
    </li>
  );
};
export default Item;
