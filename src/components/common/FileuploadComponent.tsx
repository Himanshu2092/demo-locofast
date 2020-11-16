import React from "react";

function FileuploadComponent(props: any) {
  const { label, onChange } = props;
  return (
    <div>
      <label>{label}</label>
      <input
        type="file"
        onChange={(e: any) =>
          onChange(
            (e.target.files && e.target.files[0] && e.target.files[0].name) ||
              ""
          )}
      />
    </div>
  );
}

export default FileuploadComponent;
