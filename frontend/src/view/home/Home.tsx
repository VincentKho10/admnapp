import React, { useState } from "react";
import Drawer from "../components/Drawer";
import Navbar from "../components/Navbar";
import CollapseSubmenu from "../components/CollapseSubmenu";
import navimportarr from "./navImportArr";
import BreadCrumbs from "../components/BreadCrumbs";
// import { createBrowserRouter, useLocation } from "react-router-dom";

//import pembelian
import Pembelian from "./pembelian/Pembelian";
import Pemesanan from "./pembelian/Pemesanan";
import Penerimaan from "./pembelian/Penerimaan";
import Pembayaran from "./pembelian/Pembayaran";

import Penjualan from "./penjualan/Penjualan";
import Stock from "./stock/Stock";
import BarangKeluar from "./stock/BarangKeluar";
import Permintaan from "./penjualan/Permintaan";
import Pengiriman from "./penjualan/Pengiriman";
import Penagihan from "./penjualan/Penagihan";
import BarangMasuk from "./stock/BarangMasuk";

const Home = () => {
  const [drawerBtn, setDrawerBtn] = useState(true);
  const [pathState, setPathState] = useState("/Home");

  const pathToCrumb = pathState.split("/").map((v, i, a) => {
    if (i <= 0) {
      return;
    }
    v = v[0].toUpperCase() + v.slice(1);
    if (i < a.length - 1) {
      function handleBreadCrumb() {
        let res = "";
        for (let j = 1; j < i + 1; j++) {
          res += "/" + a[j];
        }
        setPathState(res);
      }

      return (
        <li>
          <a className="btn btn-ghost text-xl" onClick={handleBreadCrumb}>
            {v}
          </a>
        </li>
      );
    } else {
      return (
        <li className="font-semibold text-xl">
          <span className="pl-4.25"> </span>
          {v}
        </li>
      );
    }
  });

  const submenustruct = navimportarr.map((v) => {
    function handleRouting(props) {
      setPathState(props.target.id);
    }
    const { icon, name, children } = v;
    if (children) {
      return (
        <li className="">
          <details>
            <summary id={`/Home/${name}`} onClick={handleRouting}>
              {icon}
              {name}
            </summary>
            <ul>
              {children.map((v1) => {
                return (
                  <li>
                    <button
                      onClick={handleRouting}
                      id={`/Home/${name}/${v1.name}`}
                    >
                      {v1.icon}
                      {v1.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </details>
        </li>
      );
    }
    return (
      <li className="">
        <a href={`/${name}`}>
          {icon}
          {name}
        </a>
      </li>
    );
  });

  const routingPathHandle = () => {
    let currentarr = pathState.split("/");
    const current = currentarr[currentarr.length - 1];
    if (current == "Pembelian") {
      return <Pembelian />;
    } else if (current == "Pemesanan") {
      return <Pemesanan />;
    } else if (current == "Penerimaan") {
      return <Penerimaan />;
    } else if (current == "Pembayaran") {
      return <Pembayaran />;
    } else if (current == "Penjualan") {
      return <Penjualan />;
    } else if (current == "Penagihan") {
      return <Penagihan />;
    } else if (current == "Pengiriman") {
      return <Pengiriman />;
    } else if (current == "Permintaan") {
      return <Permintaan />;
    } else if (current == "Stock") {
      return <Stock />;
    } else if (current == "Barang Keluar") {
      return <BarangKeluar />;
    } else if (current == "Barang Masuk") {
      return <BarangMasuk />;
    }
  };

  // console.log(submenustruct)

  // useLocation().pathname
  function showContent() {
    return (
      <div className="flex flex-col h-screen">
        <div className="h-1/12">
          <Navbar
            title={<BreadCrumbs pathlist={pathToCrumb} />}
            drawerToggle={[drawerBtn, setDrawerBtn]}
          />
        </div>
        <div className="flex flex-col h-11/12">
          {routingPathHandle()}
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-screen">
      <Drawer
        content={showContent()}
        sidebar={<CollapseSubmenu lsofitem={submenustruct} />}
        drawerState={drawerBtn}
      />
    </div>
  );
};

export default Home;
