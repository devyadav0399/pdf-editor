import React from "react";
import { useState, useEffect } from "react";
import Editor from "./Editor";
import PdfView from "./PdfView";

const View = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="parent">
      <div className="column col-1">
        <PdfView />
      </div>
      <div className="column col-2">
        <Editor data={data} setData={setData} />
      </div>
    </div>
  );
};

export default View;
