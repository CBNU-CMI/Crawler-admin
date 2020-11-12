import React, { Fragment, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import ErrorModal from "./ErrorModal";
import {} from "../styles/error.scss";

const Error = ({ errorData }) => {
  const [modalState, setModalState] = useState({ open: false });
  const [typeState, setTypeState] = useState({ type: "" });
  const [typeIdState, setTypeIdState] = useState({ id: "" });

  function openModal(type, id) {
    setModalState({ open: true });
    setTypeState({ type });
    setTypeIdState({ id });
  }
  console.log(typeState);
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
              onClick={() => openModal(error.type, error.site_id)}
            >
              {error.type2 ? (
                <p>
                  {error.type + " - "}
                  {error.type2}
                  <MdKeyboardArrowRight />
                </p>
              ) : (
                <p>
                  {error.type}
                  <MdKeyboardArrowRight />
                </p>
              )}
            </div>
          );
        })}
      </div>
      {modalState.open ? (
        <ErrorModal
          type={typeState.type}
          typeIdState={typeIdState.id}
          close={closeModal}
        />
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default Error;
