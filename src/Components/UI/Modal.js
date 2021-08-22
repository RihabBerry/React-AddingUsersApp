import React from "react";
import classes from "./Modal.module.css";

const Modal = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className={classes.backdrop}>
      <div className={classes.wrapper}>
        <header className={classes.header}>
          <p>Title</p>
          <span>X</span>
        </header>
        <main className={classes.main}>
          <p>
            This is the content of the header hez ndddThis is the content of the
            header hez ndddThis is the content of the header hez ndddThis is the
            content of the header hez ndddThis is the content of the header hez
            ndddThis is the content of the header hez ndddThis is the content of
            the header hez ndddThis is the content of the header hez nddd
          </p>
        </main>
        <footer className={classes.footer}>
          <button>Close</button>
        </footer>
      </div>
    </div>
  );
};
export default Modal;
