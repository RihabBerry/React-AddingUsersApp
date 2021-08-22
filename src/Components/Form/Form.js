import { Fragment, React, useState } from "react";
import classes from "./Form.module.css";
import Modal from "../UI/Modal";
const Form = (props) => {
  const [age, setAge] = useState("");
  const [name, setName] = useState("");

  const ageHandler = (event) => {
    if (event.target.value === "" || event.target.value === 0) {
      return;
    }
    setAge(event.target.value);
  };
  const nameHandler = (event) => {
    if (event.target.value === "") {
      return;
    }
    setName(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    let user = name + age;
    props.AddUser(user);
    setName("");
    setAge("");
  };

  return (
    <Fragment>
      <Modal show={show} />

      <div className={classes.container}>
        <form onSubmit={onSubmitHandler}>
          <label>User Name</label>
          <input onChange={nameHandler} value={name} />
          <label>User Age</label>
          <input onChange={ageHandler} value={age} />
          <button type="submit">Add user</button>
        </form>
      </div>
    </Fragment>
  );
};
export default Form;
