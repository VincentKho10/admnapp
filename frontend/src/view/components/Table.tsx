import React from "react";

const Table = (props) => {
  const { content } = props;
  return (
    <div className="overflow-x-auto w-full">
      <table className="table table-xs table-pin-rows table-pin-cols table-auto">
        {content}
      </table>
    </div>
  );
};

export default Table;
