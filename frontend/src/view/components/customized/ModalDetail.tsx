import React from "react";
import Modal from "../Modal";

const content = () => {
  return (
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  );
};

const ModalDetail = (props) => {
    const {id, title} = props
  return (
    <>
      <Modal id={id} title={title} content={content()} />
    </>
  );
};

export default ModalDetail;
