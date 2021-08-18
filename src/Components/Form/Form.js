import React from "react";
import classes from "./Form.module.css";

const Form = () => {
  return (
    <div className={classes.container}>
      <label>User Name</label>
      <input />
      <label>User Age</label>
      <input />
      <button>Add user</button>
    </div>
  );
};
export default Form;
