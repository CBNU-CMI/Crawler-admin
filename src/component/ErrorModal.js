import React, { Fragment } from "react";
import {} from "../styles/errorModal.scss";

const ErrorModal = ({ data, close }) => {
  return (
    <Fragment>
      <div className="modal-overlay" onClick={close} />
      <div className="error-modal">
        <h1>⚠️에러⚠️</h1>
        <p>{data}</p>
      </div>
    </Fragment>
  );
};

export default ErrorModal;
