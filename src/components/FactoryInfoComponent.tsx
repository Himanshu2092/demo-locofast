import React from "react";

import "../App.css";

function FactoryInfoComponent(props: any) {
  const { info } = props;
  return (
    <div>
      <div>
        <label>factory</label>
        <div className="form-group">
          <p>{info.factoryName}</p>
        </div>
      </div>
      <div>
        <label>Assign for design</label>
        <div className="form-group">
          <p>{info.designName}</p>
        </div>
      </div>
      <div>
        <label>Assign quantity</label>
        <div className="form-group">
          <p>{info.quantity}</p>
        </div>
      </div>
      <div>
        <label>challan</label>
        <div className="form-group">
          <p>{info.fileName}</p>
        </div>
      </div>
    </div>
  );
}

export default FactoryInfoComponent;
