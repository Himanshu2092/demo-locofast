import React from "react";

function DropdownComponent(props: any) {
  const { data, field, value, label, selectedItem, onChange } = props;
  const change = (e: any) => {
    onChange(e.target.value);
  };
  return (
    <div>
      <label>{label}</label>
      <div className="form-group">
        <select
          className="form-control"
          onChange={(e: any) => change(e)}
          value={selectedItem}
        >
          {data.map((item: any, i: number) => {
            return (
              <option key={field + i} value={item[value]}>
                {item[field]}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default DropdownComponent;
