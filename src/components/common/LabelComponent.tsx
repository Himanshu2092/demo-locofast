import React from "react";

function LabelComponent(props: any) {
  const { label, value } = props;
  return (
    <div>
      <label>{label}</label>
      <p>{value} meter</p>
    </div>
  );
}

export default LabelComponent;
