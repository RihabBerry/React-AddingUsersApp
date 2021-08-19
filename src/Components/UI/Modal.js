import React, { Fragment, useState } from "react";

const Modal = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <Fragment>
      <p> This is Modal</p>
    </Fragment>
  );
};
export default Modal;
