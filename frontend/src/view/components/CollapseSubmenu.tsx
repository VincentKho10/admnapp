import React from "react";

const CollapseSubmenu = (props) => {
  const { lsofitem } = props;

  return (
    <ul className="menu bg-base-200 rounded-box min-w-full">{lsofitem}</ul>
  );
};

export default CollapseSubmenu;
