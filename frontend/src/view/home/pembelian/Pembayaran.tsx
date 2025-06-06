import React, { useEffect, useState } from "react";
import Table from "../../components/Table";
import bodyarrjson from "../dummy_data/body_arr.json";
import TableModifier from "../../components/TableModifier";
import Modal from "../../components/Modal";
import ModalDetail from "../../components/customized/ModalDetail";

const Pembayaran = () => {
  const [arrCheckbox, setArrCheckbox] = useState<string[]>([]);
  const [selectAllState, setSelectAllState] = useState(false)

  const headArr = [
    "No",
    <input
      className={`checkbox`}
      type="checkbox"
      onClick={(e) => handleCheckboxHeader(e)}
    />,
    "No. Invoice",
    "No. PO",
    "No. SJ",
    "Customer",
    "Total",
    "PPN",
  ];

  const handleModifiersClick = (event) => {
    const { innerText, parentElement } = event.target;
    if (parentElement.id == "modifiers") {
      if (innerText == "Delete") {
      } else if (innerText == "Update") {
      } else if (innerText == "View") {
      }
    } else {
      //adding table
    }
  };

  const handleCheckboxHeader = (e) => {
    const cbtablerow = document.querySelectorAll(".cb-table-row")
    let res = []
    cbtablerow.forEach((v)=>{
      if(e.target.checked)res.push(v.value)
      v.checked = e.target.checked
    })
    if(e.target.checked) {
      setArrCheckbox(res)
    }
    else {
      console.log("removed")
      setArrCheckbox([])
    }
    console.log(arrCheckbox)
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

  const tableRowHandler = (e, v1) => {
    console.log(e)
    console.log(arrCheckbox);
  };

  const detailHandler = (e)=>{
    const model_data = document.querySelector("#data-detail")
    model_data?model_data.showModal():""
  }

  const handleRowCheckbox = (e)=>{
    const {value, checked} = e.target
    if(checked){
      setArrCheckbox([...arrCheckbox, value])
    }else{
      const removeditem = arrCheckbox.filter((v)=>v!=value)
      setArrCheckbox(removeditem)
    }
  }

  const bodyGenerate = () => {
    return (
      <tbody>
        {bodyarrjson.map((v, i) => {
          const pk = v["Invoice_id"]
          return (
            <tr className="h-10 hover:bg-blue-600"
                      onClick={(e) => tableRowHandler(e, v)}>
              <th>{i + 1}</th>
              <th>
                    <input
                     value={pk}
                      className="checkbox cb-table-row"
                      type="checkbox"
                      onClick={handleRowCheckbox}
                    />
              </th>
              <td onClick={(e)=>detailHandler(e)}>{pk}</td>
              <td onClick={(e)=>detailHandler(e)}>{v["PO_id"]}</td>
              <td onClick={(e)=>detailHandler(e)}>{v["SJ_id"]}</td>
              <td onClick={(e)=>detailHandler(e)}>{v["Customer"]}</td>
              <td onClick={(e)=>detailHandler(e)}>{v["Total"]}</td>
              <td onClick={(e)=>detailHandler(e)}>{v["PPN"]}</td>
            </tr>
          );
        })}
      </tbody>
    );
  };

const Pagination = () => {
  return (
    <div>
      <select defaultValue="50" className="select">
        <option>50</option>
        <option>100</option>
        <option>500</option>
        <option>All</option>
      </select>
    </div>
  );
};
  // const footerGenerate =()=>{
  //   return
  // }

  return (
    <div className="flex flex-col h-full w-full p-4 items-center">
      <div className="w-full">
        <TableModifier handleClick={handleModifiersClick} />
      </div>
      <div className="flex h-10/12 w-full justify-center p-5">
        <Table
          content={
            <>
              {headerGenerate()}
              {bodyGenerate()}
              {/* {footerGenerate()} */}
            </>
          }
        />
        <ModalDetail id="data-detail" title="Test"/>
      </div>
      
      <Pagination />
    </div>
  );
};

export default Pembayaran;
