import React, { Fragment, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import ErrorModal from "./ErrorModal";
import {} from "../styles/error.scss";

const Error = () => {
  const [modalState, setModalState] = useState({ open: false });
  function openModal() {
    setModalState({ open: true });
  }
  function closeModal() {
    setModalState({ open: false });
  }
  return (
    <Fragment>
      <div className="error">
        <p>에러났어요 🥺</p>
        <div className="error-crawler" onClick={openModal}>
          <p>
            양진재
            <MdKeyboardArrowRight />
          </p>
        </div>
      </div>
      {modalState.open ? <ErrorModal data="양진재" close={closeModal} /> : ""}
    </Fragment>
  );
};

export default Error;
