import React, { useState } from "react";
import {} from "../styles/home.scss";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Redirect } from "react-router";

const Home = () => {
  const [searchState, setSearchState] = useState({ search: false });
  const [termState, setTermState] = useState({ term: "" });

  function mousePress() {
    setSearchState({ search: true });
    setTermState({ term: "경영정보학과" });
  }

  return (
    <div className="home">
      <div className="crawler-list">
        <div className="crawler" onClick={mousePress}>
          <p>
            경영정보학과
            <MdKeyboardArrowRight style={{ color: "gray" }} />
          </p>
          {searchState.search ? (
            <Redirect
              to={{ pathname: "/result", state: { term: termState.term } }}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="opensource">
        <h3>개발자이신가요?</h3>
        <p>
          JavaScript와 HTML에 대한 약간의 지식만 있으면{" "}
          <a href="https://www.naver.com" target="_blank" rel="noreferrer">
            개발 가이드
          </a>
          를 따라 충북대학교의 다양한 공지사항 알림을 손쉽게 직접 구축할 수
          있습니다. 다른 과의 공지사항 알림을 추가하고 친구들에게 뽐내세요!
        </p>
      </div>
    </div>
  );
};

export default Home;
