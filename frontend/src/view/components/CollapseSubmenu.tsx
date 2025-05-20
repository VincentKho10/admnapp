import React from "react";

const CollapseSubmenu = (props) => {
  const { lsofitem } = props;
  const listStruct = lsofitem.map((v, i) => {
    const { icon, name, children } = v;
    if (!children) {
      return (
        <li>
          <a href="#">
            {v.icon}
            {v.name}
          </a>
        </li>
      );
    }
    return (
      <li>
        <details>
          <summary>
            {icon}
            {name}
          </summary>
          <ul>
            {children.map((v1, i1) => {
              return (
                <li>
                  <a href="#">
                    {v1.icon}
                    {v1.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </details>
      </li>
    );
  });

  return (
    <ul className="menu bg-base-200 rounded-box min-w-full">{listStruct}</ul>
  );
};

export default CollapseSubmenu;
