import { Fragment, React, useState } from "react";
import classes from "./Form.module.css";
import Modal from "../UI/Modal";
import Card from "../UI/Card";
const Form = (props) => {
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState();
  const showModal = () => {
    setShow(!show);
  };
  const closeModal = () => {
    setError(null);
  };
  const ageHandler = (event) => {
    setAge(event.target.value);
  };
  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (+age <= 0) {
      setError({
        title: "Null or negatif age",
        message: "Null or negatif age are not allowded",
      });
      if (age.trim().length === 0 || name.trim().length === 0) {
        setError({
          title: "Empty values",
          message: "Empty values not allowded",
        });
      }
    } else {
      let user = name + " age " + age;
      props.AddUser(user);
      setName("");
      setAge("");
    }
  };

  return (
    <Fragment>
      {error && <Modal closeModal={closeModal} error={error} />}
      <Card className={classes.container}>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="name">User Name</label>
          <input onChange={nameHandler} value={name} name="name" id="name" />
          <label htmlFor="age">User Age</label>
          <input onChange={ageHandler} value={age} name="age" id="age" />
          <button type="submit">Add user</button>
        </form>
      </Card>
    </Fragment>
  );
};
export default Form;
