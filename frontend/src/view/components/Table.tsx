import React from "react";

const headerGenerate = (headArr) => {
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

const bodyOnChangeHandler = (e, arrcheckbox, v) => {
  const [arrCheckbox, setArrCheckbox] = arrcheckbox;
  if (e.target.checked) {
    setArrCheckbox([...arrCheckbox, v["Invoice_id"]]);
  } else {
    const removeidx = arrCheckbox.indexOf(v["Invoice_id"]);
    if (removeidx != -1) arrCheckbox.splice(removeidx, 1);
  }
};

const bodyGenerate = (bodyArr, arrcheckbox) => {
  return (
    <tbody>
      {bodyArr.map((v, i) => {
        return (
          <tr>
            <th>{i + 1}</th>
            <td>
              <input
                className="checkbox hidden"
                type="checkbox"
                onChange={(e) => bodyOnChangeHandler(e, arrcheckbox, v)}
              />
            </td>
            <td>{v["Invoice_id"]}</td>
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

const Table = (props) => {
  const { headArr, bodyArr, arrcheckbox } = props;
  return (
    <div className="overflow-x-auto">
      <table className="table table-xs table-pin-rows table-pin-cols table-auto">
        {headerGenerate(headArr)}
        {bodyGenerate(bodyArr, arrcheckbox)}
      </table>
    </div>
  );
};

export default Table;
