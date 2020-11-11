import React from "react";
import { Link } from "react-router-dom";
import {} from "../styles/navigation.scss";
import { GiHotMeal } from "react-icons/gi";
import { CgNotes } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";
import Search from "../component/Search";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="home">
        <Link className="text-link" to="/home">
          <AiOutlineHome style={{ marginRight: "0.5rem", color: "gary" }} />홈
        </Link>
      </div>
      <div className="notice">
        <Link className="text-link" to="/notice">
          <CgNotes style={{ marginRight: "0.5rem", color: "gary" }} />
          공지
        </Link>
      </div>
      <div className="restaurant">
        <Link className="text-link" to="/restaurant">
          <GiHotMeal style={{ marginRight: "0.5rem", color: "gary" }} />
          식당
        </Link>
      </div>
      <Search />
    </div>
  );
};

export default Navigation;
