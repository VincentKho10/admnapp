import React from "react";

const BreadCrumbs = (props) => {
  const { pathstate } = props;
  const pathToCrumb = pathstate.split("/").map((v, i, a) => {
    if(i<=0){
      return;
    }
    v=v[0].toUpperCase()+v.slice(1)
    if (i < a.length-1) {
      return(<li>
        <a className="btn btn-ghost text-xl">{v}</a>
      </li>)
    } else {
      return(<li className="font-semibold text-xl">{v}</li>)
    }
  });
  return (
    <div className="breadcrumbs text-sm">
      <ul>{pathToCrumb}</ul>
    </div>
  );
};

export default BreadCrumbs;
