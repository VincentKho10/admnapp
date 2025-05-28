import React, { useState } from "react";
import Table from "../../components/Table";
import bodyarrjson from "../dummy_data/body_arr.json";
import TableModifier from "../../components/TableModifier";

const Pembayaran = () => {
  const [modifyState, setModifyState] = useState("View");
  const [arrCheckbox, setArrCheckbox] = useState(new Map());

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

  const handleCheckboxHeader = (e)=>{
    const newEnt = new Map()
    arrCheckbox.forEach((v,k,m)=>newEnt.set(k,e.target.checked))
    setArrCheckbox(newEnt)
  }

  return (
    <div className="flex flex-col h-full w-full p-4">
      <TableModifier handleClick={handleClick} modifyState={modifyState}/>
      <div className="flex h-11/12 w-full justify-center">
        <Table
          headArr={[
            "No",
            <input className={`checkbox`} type='checkbox' onChange={handleCheckboxHeader}/>,
            "No. Invoice",
            "No. PO",
            "No. SJ",
            "Customer",
            "Total",
            "PPN",
          ]}
          arrcheckbox={[arrCheckbox, setArrCheckbox]}
          bodyArr={bodyarrjson}
        />
      </div>
    </div>
  );
};

export default Pembayaran;
