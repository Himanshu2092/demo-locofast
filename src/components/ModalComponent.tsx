import FactoryInfoComponent from "./FactoryInfoComponent";
import React, { useState, useEffect } from "react";

import "../App.css";
import Dropdown from "./common/DropdownComponent";
import Textbox from "./common/TextboxComponent";
import Label from "./common/LabelComponent";
import Fileupload from "./common/FileuploadComponent";

import res from "../MockData";

function ModalComponent(props: any) {
  const { item, open, onShow } = props;
  const [value, setNext] = useState(1);
  const [info, setInfo]: any = useState({});
  const onBack = () => {
    setNext(value > 1 ? value - 1 : value);
  };
  const onNext = () => {
    setNext(value < 4 ? value + 1 : value);
  };

  const _res = res;

  useEffect(() => {
    setInfo({
      factoryName: _res.factoryList[0].name,
      designName: _res.factoryList[0].designName,
      quantity: info.quantity || "",
      fileName: info.fileName || ""
    });
  }, []);

  return (
    open && (
      <div className="modal fade in" id="myModal" role="dialog">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                onClick={() => {
                  setInfo({
                    factoryName: _res.factoryList[0].name,
                    designName: _res.factoryList[0].designName,
                    quantity: "",
                    fileName: ""
                  });
                  setNext(1);
                  onShow(false);
                }}
              >
                &times;
              </button>
              <h4 className="modal-title">Material details</h4>
            </div>
            <div className="modal-body">
              <span>
                <img src={item.url} width="329" height="389" />
              </span>
              <h4>Assign to factory</h4>
              {value >= 1 &&
              value < 4 && (
                <Dropdown
                  data={_res.factoryList}
                  field="name"
                  value="name"
                  label="Factory"
                  selectedItem={info.factoryName}
                  onChange={(v: string) => setInfo({ ...info, factoryName: v })}
                />
              )}

              {value >= 2 &&
              value < 4 && (
                <Dropdown
                  data={_res.factoryList}
                  field="designName"
                  value="designName"
                  label="Assign for designs"
                  selectedItem={info.designName}
                  onChange={(v: string) => setInfo({ ...info, designName: v })}
                  s
                />
              )}

              {value === 3 && (
                <div>
                  <Textbox
                    label="Assign quantity"
                    value={info.quantity}
                    onChange={(v: any) => setInfo({ ...info, quantity: v })}
                  />
                  <Label
                    label="Available Inventory"
                    value={_res.factoryList[0].inventory}
                  />
                  <Fileupload
                    label="Attach Challan"
                    onChange={(v: string) => setInfo({ ...info, fileName: v })}
                  />
                </div>
              )}

              {value === 4 && <FactoryInfoComponent info={info} />}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                onClick={() => onBack()}
              >
                Back
              </button>
              {value <= 3 && (
                <button
                  type="button"
                  className="btn btn-default"
                  onClick={() => onNext()}
                  disabled={value === 3 && (!info.quantity || !info.fileName)}
                >
                  Next
                </button>
              )}
              {value === 4 && (
                <button
                  type="button"
                  className="btn btn-default"
                  onClick={() => onNext()}
                >
                  Assign to factory
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default ModalComponent;
