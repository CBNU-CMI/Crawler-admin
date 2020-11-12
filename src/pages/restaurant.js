import React, { useState, useEffect } from "react";
import Error from "../component/Error";
const axios = require("axios");

const Restaurant = () => {
  const [errorRestaurantState, setErrorRestaurantState] = useState([]);
  
  useEffect(() => {
    axios.get(`http://172.30.7.171:3000/error/restaurant/list`).then((res) => {
      const errorData = res.data;
      setErrorRestaurantState(errorData);
    });
  }, []);

  return (
    <div className="restaurant">
      <Error errorData={errorRestaurantState} />
    </div>
  );
};

export default Restaurant;
