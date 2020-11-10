import React from "react";
import { Link } from "react-router-dom";
import {} from "../styles/navigation.scss";
import { GiHotMeal } from "react-icons/gi";
import { CgNotes } from "react-icons/cg";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="notice">
        <Link className="text-link" to="/notice">
          <CgNotes style={{ marginRight: "0.5rem" }} />
          공지
        </Link>
      </div>
      <div className="restaurant">
        <Link className="text-link" to="/restaurant">
          <GiHotMeal style={{ marginRight: "0.5rem" }} />
          식당
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
