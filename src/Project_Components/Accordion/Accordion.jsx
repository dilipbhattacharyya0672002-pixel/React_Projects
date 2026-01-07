import { useState } from "react";
import accordionData from "./accordion.js";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let cpyMutliple = [...multiple];
    const findIndexOfCurrentId = cpyMutliple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) {
      cpyMutliple.push(getCurrentId);
    } else {
      cpyMutliple.splice(findIndexOfCurrentId, 1);
    }

    setMultiple(cpyMutliple);
  }

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        {enableMultiSelection ? "Disable Multi Selection" : "Enable Multi Selection"}
      </button>
      <div className="accordion">
        {accordionData && accordionData.length > 0 ? (
          accordionData.map((dataItem) => (
            <div key={dataItem.id} className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
                style={{ cursor: "pointer", fontWeight: "bold", padding: "10px" }}
              >
                <h3>{dataItem.question}</h3>
                
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content" style={{ padding: "10px", backgroundColor: "#f9f9f9" }}>
                      {dataItem.answer}
                    </div>
                  )
                : selected === dataItem.id && (
                    <div className="content" style={{ padding: "10px", backgroundColor: "#f9f9f9" }}>
                      {dataItem.answer}
                    </div>
                  )}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}
