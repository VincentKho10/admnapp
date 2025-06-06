import React from "react";

const Modal = (props) => {
  const { id, title, content } = props;
  return (
    <dialog id={id} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{title}</h3>
        {content}
      </div>
    </dialog>
  );
};

export default Modal;
