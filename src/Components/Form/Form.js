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
    if (age.trim().length === 0 || name.trim().length === 0) {
      setError({ title: "Empty age", message: "Empty age not allowded" });
    }
    if (+age <= 0) {
      setError({
        title: "Null or negatif age",
        message: "Null or negatif age are not allowded",
      });
    } else {
      let user = name + age;
      props.AddUser(user);
      setName("");
      setAge("");
    }
  };

  return (
    <Fragment>
      <button onClick={showModal}>Show Modal</button>
      {error && <Modal closeModal={closeModal} error={error} />}
      <Card>
        <div className={classes.container}>
          <form onSubmit={onSubmitHandler}>
            <label htmlFor="name">User Name</label>
            <input onChange={nameHandler} value={name} name="name" id="name" />
            <label htmlFor="age">User Age</label>
            <input onChange={ageHandler} value={age} name="age" id="age" />
            <button type="submit">Add user</button>
          </form>
        </div>
      </Card>
    </Fragment>
  );
};
export default Form;
