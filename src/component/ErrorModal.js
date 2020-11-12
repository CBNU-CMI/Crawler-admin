import React, { Fragment, useState, useEffect } from "react";
import {} from "../styles/errorModal.scss";
const axios = require("axios");

const ErrorModal = ({ type, errorData, close }) => {
  const [errorLogState, setErrorLogState] = useState();

  useEffect(() => {
    axios
      .get(`http://172.30.7.171:3000/error/log?restaurant_name=${type}`)
      .then((res) => {
        const errorLog = res.data;
        setErrorLogState(errorLog);
      });
  }, []);
  
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

        {errorLogState ? (
          <Fragment>
            <h2>⚠️에러 로그⚠️</h2>
            <p className="error-log">{errorLogState.errorLog}</p>
          </Fragment>
        ) : (
          ""
        )}
      </div>
    </Fragment>
  );
};

export default ErrorModal;
