import React, { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

const DrawerMenu = (props) => {
  const { title, icon, activeState, id, children, hidden } = props;
  const isActiveStateEmpty = activeState ? false : true;
  const [active, setActive] = isActiveStateEmpty ? [] : activeState;

  const clickHandle = (e) => {
    if (!isActiveStateEmpty) {
      setActive(id == active ? -1 : id);
    }
    console.log(e)
  };

  return (
    <>
      <li
        className="font-bold opacity-100 duration-500 transition-all ease-in-out"
        hidden={hidden}
        onClick={clickHandle}
      >
        <div className="p-4">
          {icon ? (
            <label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#FFFFFF"
              >
                {icon}
              </svg>
            </label>
          ) : (
            ""
          )}
          {title}
          {/* {console.log(children)} */}
          {children ? (
            <label className="swap swap-rotate">
              <input type="checkbox" checked={active == id ? true : false} />
              <ChevronUpIcon
                className="swap-on fill-current"
                height={20}
                width={20}
              />
              <ChevronDownIcon
                className="swap-off fill-current"
                height={20}
                width={20}
              />
            </label>
          ) : (
            <></>
          )}
        </div>
      </li>
      {children ? (
        children.map((v) => {
          return v;
        })
      ) : (
        <></>
      )}
    </>
  );
};

const sideMenu = () => {
  const pembelianIconPath = (
    <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
  );
  const stockIconPath = (
    <path d="M160-200h80v-320h480v320h80v-426L480-754 160-626v426Zm-80 80v-560l400-160 400 160v560H640v-320H320v320H80Zm280 0v-80h80v80h-80Zm80-120v-80h80v80h-80Zm80 120v-80h80v80h-80ZM240-520h480-480Z" />
  );
  const penjualanIconPath = (
    <path d="M856-390 570-104q-12 12-27 18t-30 6q-15 0-30-6t-27-18L103-457q-11-11-17-25.5T80-513v-287q0-33 23.5-56.5T160-880h287q16 0 31 6.5t26 17.5l352 353q12 12 17.5 27t5.5 30q0 15-5.5 29.5T856-390ZM513-160l286-286-353-354H160v286l353 354ZM260-640q25 0 42.5-17.5T320-700q0-25-17.5-42.5T260-760q-25 0-42.5 17.5T200-700q0 25 17.5 42.5T260-640Zm220 160Z" />
  );
  const [active, setActive] = useState(-1);
  return (
    <>
      <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        <DrawerMenu
          title="Pembelian"
          icon={pembelianIconPath}
          activeState={[active, setActive]}
          id={0}
          children={[
            <DrawerMenu
              title="Pembayaran"
              hidden={active == 0 ? false : true}
            />,
            <DrawerMenu
              title="Pemesanan"
              hidden={active == 0 ? false : true}
            />,
            <DrawerMenu
              title="Penerimaan"
              hidden={active == 0 ? false : true}
            />,
          ]}
        />
        <DrawerMenu
          title="Penjualan"
          icon={penjualanIconPath}
          activeState={[active, setActive]}
          id={1}
        />
        <DrawerMenu
          title="Stock"
          icon={stockIconPath}
          activeState={[active, setActive]}
          id={2}
        />
      </ul>
    </>
  );
};

const navRoute = () => {};

const contentRoute = () => {};

const Home = () => {
  return (
    <div className="h-screen w-screen flex flex-row">
      <div className="bg-yellow-400 h-full w-3/12 flex flex-col">
        {sideMenu()}
      </div>
      <div className="bg-green-400 h-full w-full flex flex-col">
        <div className="bg-red-400 h-1/12 w-full flex flex-row"></div>
        <div className="bg-cyan-400 h-full w-full flex flex-row"></div>
      </div>
    </div>
  );
};

export default Home;
