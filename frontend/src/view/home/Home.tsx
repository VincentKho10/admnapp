import React, { useState } from "react";
import Drawer from "../components/Drawer";
import Navbar from "../components/Navbar";
import CollapseSubmenu from "../components/CollapseSubmenu";
import {
  pembelian  ,
  pemesanan  ,
  penerimaan  ,
  pembayaran  ,
  penjualan  ,
  permintaan  ,
  pengiriman  ,
  penagihan  ,
  stock  ,
  barang_masuk  ,
  barang_keluar  ,
} from "../../assets/navbar/navicon"

const Home = () => {
  const [drawerBtn, setDrawerBtn] = useState(true);
  const submenustruct = [
    {
      icon: <img src={pembelian}/>,
      name: "Pembelian",
      children: [
        {
          icon: <img src={pemesanan}/>,
          name: "Pemesanan",
        },
        {
          icon: <img src={penerimaan}/>,
          name: "Penerimaan",
        },
        {
          icon: <img src={pembayaran}/>,
          name: "Pembayaran",
        },
      ],
    },
    {
      icon: <img src={penjualan}/>,
      name: "Penjualan",
      children: [
        {
          icon: <img src={permintaan}/>,
          name: "Permintaan",
        },
        {
          icon: <img src={pengiriman}/>,
          name: "Pengiriman",
        },
        {
          icon: <img src={penagihan}/>,
          name: "Penagihan",
        },
      ],
    },
    {
      icon: <img src={stock}/>,
      name: "Stock",
      children: [
        {
          icon: <img src={barang_masuk}/>,
          name: "Barang Masuk",
        },
        {
          icon: <img src={barang_keluar}/>,
          name: "Barang Keluar",
        },
      ],
    },
  ];

  function showContent() {
    return (
      <>
        <Navbar title="Home" drawerToggle={[drawerBtn, setDrawerBtn]} />
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
