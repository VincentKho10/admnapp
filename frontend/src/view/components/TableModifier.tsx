import React from 'react'

const TableModifier = (props) => {
    const {handleClick, modifyState} = props;
  return (
    <div className="flex felx-row content-center justify-between">
        <div id="submitter">
        <button className="btn m-2 bg-green-600" onClick={handleClick}>
          Create
        </button>
        <button
            className={`btn m-2 bg-orange-500 ${modifyState == "View" ? "btn-disabled" : ""}`}
            onClick={handleClick}
          >
            Change
          </button>
          </div>
        <div id="modifiers">
          <button
            className={`btn m-2 ${modifyState == "Delete" ? "bg-red-500" : ""}`}
            onClick={handleClick}
          >
            Delete
          </button>
          <button
            className={`btn m-2 ${
              modifyState == "Update" ? "bg-orange-500" : ""
            }`}
            onClick={handleClick}
          >
            Update
          </button>
          <button
            className={`btn m-2 ${modifyState == "View" ? "bg-blue-500" : ""}`}
            onClick={handleClick}
          >
            View
          </button>
        </div>
      </div>
  )
}

export default TableModifier