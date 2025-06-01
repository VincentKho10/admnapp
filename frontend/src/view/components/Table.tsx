import React from "react";

const Pagination = () => {
  return (
    <div>
      <select defaultValue="50" className="select">
        <option>50</option>
        <option>100</option>
        <option>500</option>
        <option>All</option>
      </select>
    </div>
  );
};

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
      <Pagination />
    </div>
  );
};

export default Table;
