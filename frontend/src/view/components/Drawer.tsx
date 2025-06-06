import React from "react";

const Drawer = (props) => {
  const { content, sidebar, drawerState } = props;
  return (
    <div className="flex flex-row h-full w-full">
      {/* <input id="my-drawer-2" type="checkbox" className="drawer-toggle hidden" /> */}
      <div className={`w-2/12 min-w-40 h-full flex-row ${drawerState ? "" : "hidden"}`}>
        <ul className="bg-base-200 h-full">
          {/* Sidebar content here */}
          {sidebar}
        </ul>
      </div>
      <div className="w-10/12">
        {/* Page content here */}
        {content}
      </div>
    </div>
  );
};

export default Drawer;
