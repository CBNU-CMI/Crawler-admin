import React, { Fragment } from "react";
import {} from "../styles/errorModal.scss";

const ErrorModal = ({ errorData, errorLog, close }) => {
  return (
    <Fragment>
      <div className="modal-overlay" onClick={close} />
      <div className="error-modal">
        {errorData.title ? (
          <Fragment>
            <h2>최근 게시글</h2>
            <p className="title">{errorData.title}</p>
            <p className="date">{errorData.date}</p>
            <p className="content">{errorData.content}</p>
          </Fragment>
        ) : (
          ""
        )}

        {errorLog.errorLog ? (
          <Fragment>
            <h2>⚠️에러 로그⚠️</h2>
            <p className="error-log">{errorLog.errorLog}</p>
          </Fragment>
        ) : (
          ""
        )}
      </div>
    </Fragment>
  );
};

export default ErrorModal;
