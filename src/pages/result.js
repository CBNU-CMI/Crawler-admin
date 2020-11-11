import React, { Fragment } from "react";
import {} from "../styles/result.scss";
const Result = (result) => {
  console.log(result.location.state.term);
  return (
    <Fragment>
      <div className="term">{result.location.state.term}</div>
      <div className="result">
        <div className="title">제목</div>
        <div className="day">날짜</div>
        <div className="content">내용</div>
      </div>
    </Fragment>
  );
};

export default Result;
