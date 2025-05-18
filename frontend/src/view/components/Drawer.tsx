import React from "react";

const Drawer = (props) => {
  const { content, sidebar, drawerState } = props;
  return (
    <div className={`drawer ${drawerState ? "lg:drawer-open" : "lg:drawer-close"}`}>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle hidden" />
      <div className="drawer-content flex flex-col items-center justify-center relative">
        {/* Page content here */}
        {content}
      </div>
      <div className="drawer-side hidden">
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          {sidebar}
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
