import React, { useState } from "react";
import Table from "../../components/Table";

const Pembayaran = () => {
  const [modifyState, setModifyState] = useState("View");
  const [arrCheckbox, setArrCheckbox] = useState([]);

  const handleClick = (event) => {
    const { innerText, parentElement } = event.target;
    if (parentElement.id == "modifiers") {
      setModifyState(innerText);
      //what modifier
      if (innerText == "Delete") {
      } else if (innerText == "Update") {
      } else if (innerText == "View") {
      }
    } else {
      //adding table
    }
  };

  return (
    <div className="flex flex-col h-full w-full p-4">
      <div className="flex felx-row content-center justify-between">
        <button className="btn m-2 bg-green-500" onClick={handleClick}>
          Create
        </button>
        <div id="modifiers">
          <button
            className={`btn m-2 ${modifyState == "Delete" ? "bg-red-500" : ""}`}
            onClick={handleClick}
          >
            Delete
          </button>
          <button
            className={`btn m-2 ${
              modifyState == "Update" ? "bg-orange-500" : ""
            }`}
            onClick={handleClick}
          >
            Update
          </button>
          <button
            className={`btn m-2 ${modifyState == "View" ? "bg-blue-500" : ""}`}
            onClick={handleClick}
          >
            View
          </button>
        </div>
      </div>
      <div className="flex h-11/12 w-full justify-center">
        <Table
          headArr={[
            "No",
            <input className={`checkbox ${}`} type='checkbox'/>,
            "No. Invoice",
            "No. PO",
            "No. SJ",
            "Customer",
            "Total",
            "PPN",
          ]}
          arrcheckbox={[arrCheckbox, setArrCheckbox]}
          bodyArr={[
            {
              "Invoice_id": "INV-CMP/V/2023/001",
              "PO_id": "232001223",
              "SJ_id": "2023/V/001",
              "Customer": "PT. TTPA",
              "Total": "100000000",
              "PPN": "10000000",
            },
            {
              "Invoice_id": "INV-CMP/V/2023/002",
              "PO_id": "232001223",
              "SJ_id": "2023/V/001",
              "Customer": "PT. TTPA",
              "Total": "100000000",
              "PPN": "10000000",
            },
            {
              "Invoice_id": "INV-CMP/V/2023/003",
              "PO_id": "232001223",
              "SJ_id": "2023/V/001",
              "Customer": "PT. TTPA",
              "Total": "100000000",
              "PPN": "10000000",
            },
            {
              "Invoice_id": "INV-CMP/V/2023/004",
              "PO_id": "232001223",
              "SJ_id": "2023/V/001",
              "Customer": "PT. TTPA",
              "Total": "100000000",
              "PPN": "10000000",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Pembayaran;
