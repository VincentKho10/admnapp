import React from "react";

const TableModifier = (props) => {
  const { handleClick, modifyState } = props;
  return (
    <div className="flex felx-row content-center justify-between">
      <div id="submitter">
        <button className="btn m-2 bg-green-600" onClick={handleClick}>
          Create
        </button>
        <button className={`btn m-2 bg-red-500`} onClick={handleClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TableModifier;
