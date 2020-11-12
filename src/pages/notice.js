import React, { useEffect, useState } from "react";
import Error from "../component/Error";

const axios = require("axios");

const Notice = () => {
  const [errorNoticeState, setErrorNoticeState] = useState([]);

  useEffect(() => {
    axios.get(`http://172.30.7.171:3000/error/notice/list`).then((res) => {
      const errorData = res.data;
      setErrorNoticeState(errorData);
    });
  }, []);

  return (
    <div className="notice">
      <Error errorData={errorNoticeState} />
    </div>
  );
};

export default Notice;
