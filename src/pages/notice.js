import React from "react";
import Error from "../component/Error";
import errorData from "../dummy/errorNotice";
import errorLog from "../dummy/noticeErrorLog";

const Notice = () => {
  return (
    <div className="notice">
      <Error errorData={errorData} errorLog={errorLog} />
    </div>
  );
};

export default Notice;
