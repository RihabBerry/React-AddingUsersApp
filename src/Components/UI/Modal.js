import { React, useState } from "react";
import classes from "./Modal.module.css";

const Modal = (props) => {
  
  return (
    <div onClick={props.closeModal} className={classes.backdrop}>
      <div className={classes.wrapper}>
        <header className={classes.header}>
          <p>{props.error.title}</p>
          <span onClick={props.closeModal}>X</span>
        </header>
        <main className={classes.main}>
          <p>{props.error.message}</p>
        </main>
        <footer onClick={props.closeModal} className={classes.footer}>
          <button>Close</button>
        </footer>
      </div>
    </div>
  );
};
export default Modal;
