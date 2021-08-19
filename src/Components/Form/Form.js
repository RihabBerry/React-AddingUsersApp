import { React, useState } from "react";
import classes from "./Form.module.css";

const Form = (props) => {
  const [age, setAge] = useState("");
  const [name, setName] = useState("");

  const AgeHandler = (event) => {
    setAge(event.target.value);
  };
  const NameHandler = (event) => {
    setName(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    let user = name + age;
    props.AddUser(user);
  };

  return (
    <div className={classes.container}>
      <form onSubmit={onSubmitHandler}>
        <label>User Name</label>
        <input onChange={NameHandler} />
        <label>User Age</label>
        <input onChange={AgeHandler} />
        <button type="submit">Add user</button>
      </form>
    </div>
  );
};
export default Form;
