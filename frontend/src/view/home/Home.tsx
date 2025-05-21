import React, { useState } from "react";
import Drawer from "../components/Drawer";
import Navbar from "../components/Navbar";
import CollapseSubmenu from "../components/CollapseSubmenu";
import navimportarr from "./navImportArr";
import BreadCrumbs from "../components/BreadCrumbs";
import { createBrowserRouter, useLocation } from "react-router-dom";
import Pembelian from "./pembelian/Pembelian";
import Penjualan from "./penjualan/Penjualan";
import Stock from "./stock/Stock";

const Home = () => {
  const [drawerBtn, setDrawerBtn] = useState(true);
  const [pathState, setPathState] = useState("/Home");

  // useLocation().pathname
  function showContent() {
    return (
      <>
        <Navbar
          title={<BreadCrumbs pathstate={pathState} />}
          drawerToggle={[drawerBtn, setDrawerBtn]}
        />
        <div className="flex-11/12"></div>
      </>
    );
  }

  const submenustruct = navimportarr.map((v) => {
    const { icon, name, children } = v;
    if (children) {
      return (
        <li>
          <details>
            <summary>
              {icon}
              {name}
            </summary>
            <ul>
              {children.map((v1) => {
                return (
                  <li>
                    <a href={`/${v1.name}`}>{v1.icon}{v1.name}</a>
                  </li>
                );
              })}
            </ul>
          </details>
        </li>
      );
    }
    return (
      <li>
        <a href={`/${name}`}>{icon}{name}</a>
      </li>
    );
  });

  // console.log(submenustruct)

  return (
    <Drawer
      content={showContent()}
      sidebar={<CollapseSubmenu lsofitem={submenustruct} />}
      drawerState={drawerBtn}
    />
  );
};

export default Home;
