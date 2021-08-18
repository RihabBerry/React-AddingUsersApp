import React from "react";
import classes from "./Item.module.css";

const Item = (props) => {
  return (
    <li>
      <p>{props.individual.Name + props.individual.Age}</p>
    </li>
  );
};
export default Item;
