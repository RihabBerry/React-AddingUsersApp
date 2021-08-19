import React from "react";
import classes from "./Item.module.css";

const Item = (props) => {
  console.log(props.individual);

  return (
    <li key={props.individual.id}>
      <p>{props.individual.user}</p>
    </li>
  );
};
export default Item;
