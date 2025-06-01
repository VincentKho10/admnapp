import React, { useEffect, useState } from "react";
import Table from "../../components/Table";
import bodyarrjson from "../dummy_data/body_arr.json";
import TableModifier from "../../components/TableModifier";

const Pembayaran = () => {
  const [modifyState, setModifyState] = useState("View");
  const [arrCheckbox, setArrCheckbox] = useState(new Map());
  const [isDetail, setIsDetail] = useState(true)
  const headArr = [
    "No",
    isDetail?"":<input
      className={`checkbox`}
      type="checkbox"
      onChange={(e) => handleCheckboxHeader(e)}
    />,
    "No. Invoice",
    "No. PO",
    "No. SJ",
    "Customer",
    "Total",
    "PPN",
  ];

  useEffect(() => {
    let newEnt = new Map();
    bodyarrjson.forEach((v) => {
      newEnt.set(v["Invoice_id"], false);
    });
    setArrCheckbox(newEnt);
  }, [bodyarrjson]);

  const handleClick = (event) => {
    const { innerText, parentElement } = event.target;
    if (parentElement.id == "modifiers") {
      setModifyState(innerText);
      //what modifier
      if (innerText == "Delete") {
        setIsDetail(false)
      } else if (innerText == "Update") {
        setIsDetail(true)
      } else if (innerText == "View") {
        setIsDetail(true)
      }
    } else {
      //adding table
    }
  };

  const handleCheckboxHeader = (e) => {
    let newEnt = new Map();
    arrCheckbox.forEach((v, k, m) => newEnt.set(k, e.target.checked));
    setArrCheckbox(newEnt);
    console.log(arrCheckbox);
  };

  const headerGenerate = () => {
    return (
      <thead>
        <tr>
          {headArr.map((v) => {
            return <td>{v}</td>;
          })}
        </tr>
      </thead>
    );
  };

  const bodyOnChangeHandler = (e, v1) => {
    console.log(e)
    let newEnt = new Map();
    arrCheckbox.forEach((v, k, m) =>
      newEnt.set(k, k == v1["Invoice_id"] ? e.target.checked : v)
    );
    setArrCheckbox(newEnt);
    console.log(arrCheckbox);
  };

  const bodyGenerate = () => {
    return (
      <tbody>
        {bodyarrjson.map((v, i) => {
          const pk = v["Invoice_id"]
          return (
            <tr className="hover:bg-blue-500 hover:select-ghost"
                      onClick={(e) => bodyOnChangeHandler(e, v)}>
              <th>{i + 1}</th>
              <td>
                {
                  isDetail?"":<label key={pk}>
                    <input
                      className="checkbox"
                      type="checkbox"
                      checked={arrCheckbox.get(pk)}
                    />
                  </label>
                }
              </td>
              <td>{pk}</td>
              <td>{v["PO_id"]}</td>
              <td>{v["SJ_id"]}</td>
              <td>{v["Customer"]}</td>
              <td>{v["Total"]}</td>
              <td>{v["PPN"]}</td>
            </tr>
          );
        })}
      </tbody>
    );
  };

  // const footerGenerate =()=>{
  //   return
  // }

  return (
    <div className="flex flex-col h-full w-full p-4">
      <TableModifier handleClick={handleClick} modifyState={modifyState} />
      <div className="flex h-11/12 w-full justify-center">
        <Table
          content={
            <>
              {headerGenerate()}
              {bodyGenerate()}
              {/* {footerGenerate()} */}
            </>
          }
        />
      </div>
    </div>
  );
};

export default Pembayaran;
