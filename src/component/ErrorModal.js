import React, { Fragment, useState, useEffect } from "react";
import {} from "../styles/errorModal.scss";
const axios = require("axios");

const ErrorModal = ({ type, typeId, close }) => {
  const [errorLogState, setErrorLogState] = useState();
  const [noticeDataState, setNoticeDataState] = useState();
  useEffect(() => {
    axios
      .get(`http://172.30.7.171:3000/error/log?restaurant_name=${type}`)
      .then((res) => {
        const errorLog = res.data;
        setErrorLogState(errorLog);
      });
    axios
      .get(`http://172.30.7.171:3000/error/log?site_id=${typeId}`)
      .then((res) => {
        const errorLog = res.data;
        setErrorLogState(errorLog);
      });
    axios
      .get(`http://172.30.7.171:3000/error/notice?site_id=${typeId}`)
      .then((res) => {
        const notice = res.data;
        setNoticeDataState(notice);
      });
  }, []);
  return (
    <Fragment>
      <div className="modal-overlay" onClick={close} />
      <div className="error-modal">
        {errorLogState ? (
          <Fragment>
            <h2>⚠️에러 로그⚠️</h2>
            <p className="error-log">{errorLogState.errorLog}</p>
          </Fragment>
        ) : (
          ""
        )}
        {noticeDataState ? (
          <Fragment>
            <h2>최근 게시글</h2>
            <p className="title">{noticeDataState.title}</p>
            <p className="date">{noticeDataState.date}</p>
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: noticeDataState.content }}
            ></div>
          </Fragment>
        ) : (
          ""
        )}
      </div>
    </Fragment>
  );
};

export default ErrorModal;
