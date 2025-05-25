import React from "react";

const CollapseSubmenu = (props) => {
  const { lsofitem } = props;

  return (
    <ul className="menu bg-base-200 rounded-box min-w-full border-2">{lsofitem}</ul>
  );
};

export default CollapseSubmenu;
