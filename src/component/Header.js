import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <Link className="text-link" to="/">홈으로</Link>
      </header>
    </div>
  );
};

export default Header;
