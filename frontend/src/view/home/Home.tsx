import React, { useState } from "react";
import Drawer from "../components/Drawer";
import Navbar from "../components/Navbar";
import CollapseSubmenu from "../components/CollapseSubmenu";
import submenustruct from "./navImportArr"
import BreadCrumbs from "../components/BreadCrumbs";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [drawerBtn, setDrawerBtn] = useState(true);
  const [pathState, setPathState] = useState("/test/hest/best");
  // useLocation().pathname
  function showContent() {
    return (
      <>
        <Navbar title={<BreadCrumbs pathstate={pathState}/>} drawerToggle={[drawerBtn, setDrawerBtn]} />
        <div className="flex-11/12"></div>
      </>
    );
  }

  return (
    <Drawer
      content={showContent()}
      sidebar={<CollapseSubmenu lsofitem={submenustruct} />}
      drawerState={drawerBtn}
    />
  );
};

export default Home;
