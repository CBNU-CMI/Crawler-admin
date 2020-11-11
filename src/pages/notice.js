import React from "react";
import Navigation from "../component/Navigation";
import {} from "../styles/notice.scss";
import { MdKeyboardArrowRight } from "react-icons/md";

const Notice = () => {
  return (
    <div className="notice">
      <Navigation />
      <div className="error">
        <p>에러났어요 🥺</p>
        <div className="error-crawler">
          <p>
            경영정보학과 학부공지
            <MdKeyboardArrowRight />
          </p>
        </div>
        <div className="error-crawler">
          <p>
            경영정보학과 학부공지
            <MdKeyboardArrowRight />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notice;
