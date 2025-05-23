import React from "react";

const BreadCrumbs = (props) => {
  const { pathlist } = props;
  return (
    <div className="breadcrumbs text-sm">
      <ul>{pathlist}</ul>
    </div>
  );
};

export default BreadCrumbs;
