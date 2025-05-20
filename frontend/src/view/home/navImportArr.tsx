import {
  pembelian,
  pemesanan,
  penerimaan,
  pembayaran,
  penjualan,
  permintaan,
  pengiriman,
  penagihan,
  stock,
  barang_masuk,
  barang_keluar,
  home,
} from "/src/assets/navbar/navicon"

export default [
  {
    icon: <img src={home} />,
    name: "Home",
  },
  {
    icon: <img src={pembelian} />,
    name: "Pembelian",
    children: [
      {
        icon: <img src={pemesanan} />,
        name: "Pemesanan",
      },
      {
        icon: <img src={penerimaan} />,
        name: "Penerimaan",
      },
      {
        icon: <img src={pembayaran} />,
        name: "Pembayaran",
      },
    ],
  },
  {
    icon: <img src={penjualan} />,
    name: "Penjualan",
    children: [
      {
        icon: <img src={permintaan} />,
        name: "Permintaan",
      },
      {
        icon: <img src={pengiriman} />,
        name: "Pengiriman",
      },
      {
        icon: <img src={penagihan} />,
        name: "Penagihan",
      },
    ],
  },
  {
    icon: <img src={stock} />,
    name: "Stock",
    children: [
      {
        icon: <img src={barang_masuk} />,
        name: "Barang Masuk",
      },
      {
        icon: <img src={barang_keluar} />,
        name: "Barang Keluar",
      },
    ],
  },
];
