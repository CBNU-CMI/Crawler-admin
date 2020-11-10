import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="notice">
        <Link className="text-link" to="/notice">
          공지
        </Link>
      </div>
      <div className="restaurant">
        <Link className="text-link" to="/restaurant">
          식당
        </Link>
      </div>
    </div>
  );
};

export default Home;
