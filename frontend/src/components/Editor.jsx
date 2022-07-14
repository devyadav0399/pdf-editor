import React, { useContext } from "react";
import JsonTable from "./JsonTable";
import { FileContext } from "./FileContext";

const Editor = ({ data, setData }) => {
  const { file64, setFile64 } = useContext(FileContext);

  const deleteRecords = () => {
    fetch("api/delete", {
      method: "DELETE",
    })
      .then((res) => res.text())
      .then((res) => {
        console.log(res);
        setData([]);
        setFile64(null);
      });
  };

  return (
    <>
      <div className="editor">
        {Object.keys(data).length !== 0 ? (
          <>
            <JsonTable JsonData={data} />
            <button onClick={deleteRecords} className="btn">
              Delete
            </button>
          </>
        ) : (
          <>
            <p>no data</p>
            <button className="btn" onClick={() => window.location.reload()}>
              Go Back
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Editor;
