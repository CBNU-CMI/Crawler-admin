import React from "react";
import Error from "../component/Error";
import errorData from "../dummy/errorRestaurant";
import errorLog from "../dummy/restaurantErrorLog";

const Restaurant = () => {
  return (
    <div className="restaurant">
      <Error errorData={errorData} errorLog={errorLog} />
    </div>
  );
};

export default Restaurant;
