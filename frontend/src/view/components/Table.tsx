import React from "react";

const TableContent = (props) => {
  const { content } = props;
  return (
    <table className="table table-xs table-pin-rows table-pin-cols table-auto">
      {content}
    </table>
  );
};

const Table = (props) => {
  const { content } = props;
  return (
    <div className="overflow-x-auto w-full flex flex-col items-center">
      <TableContent content={content} />
    </div>
  );
};

export default Table;
