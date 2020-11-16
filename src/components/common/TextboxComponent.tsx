import React from "react";

function TextboxComponent(props: any) {
  const { value, label, onChange } = props;
  return (
    <div>
      <label>{label}</label>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="text"
          value={value}
          placeholder="Enter quantity"
          name="text"
          onChange={(e: any) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default TextboxComponent;
