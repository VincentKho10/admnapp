import React from "react";

const CollapseSubmenu = (props) => {
  const { lsofitem } = props;
  const listStruct = lsofitem.map((v, i) => {
    console.log(v)
    return (
      <li>

      <details>
        <summary>{v}</summary>
        <ul>
          <li><a href="#">meh</a></li>
        </ul>
      </details>
      </li>
    );
  });

  return (
    <ul className="menu bg-base-200 rounded-box min-w-full">{lsofitem}</ul>
  );
};

export default CollapseSubmenu;
