import React, { useState } from "react";
import Navigation from "../component/Navigation";
import {} from "../styles/restaurant.scss";
import { MdKeyboardArrowRight } from "react-icons/md";
import ErrorModal from "../component/ErrorModal";

const Restaurant = () => {
  const [modalState, setModalState] = useState({ open: false });
  function openModal() {
    setModalState({ open: true });
  }
  function closeModal() {
    setModalState({ open: false });
  }
  return (
    <div className="restaurant">
      <Navigation />
      <div className="error">
        <p>에러났어요 🥺</p>
        <div className="error-crawler" onClick={openModal}>
          <p>
            양진재
            <MdKeyboardArrowRight />
          </p>
        </div>
        <div className="error-crawler">
          <p>
            양성재
            <MdKeyboardArrowRight />
          </p>
        </div>
      </div>
      {modalState.open ? <ErrorModal data="양진재" close={closeModal} /> : ""}
    </div>
  );
};

export default Restaurant;
