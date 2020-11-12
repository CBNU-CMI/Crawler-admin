import React, { Fragment, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import ErrorModal from "./ErrorModal";
import {} from "../styles/error.scss";

const Error = ({ errorData }) => {
  const [modalState, setModalState] = useState({ open: false });
  const [typeState, setTypeState] = useState({ type: "" });

  function openModal(type) {
    setModalState({ open: true });
    setTypeState({ type });
  }
  function closeModal() {
    setModalState({ open: false });
  }
  return (
    <Fragment>
      <div className="error">
        <p>에러났어요 🥺</p>
        {errorData.map((error) => {
          return (
            <div
              key={error.type}
              className="error-crawler"
              onClick={() => openModal(error.type)}
            >
              <p>
                {error.type}
                <MdKeyboardArrowRight />
              </p>
            </div>
          );
        })}
      </div>
      {modalState.open ? (
        <ErrorModal type={typeState.type} errorData={errorData} close={closeModal} />
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default Error;
