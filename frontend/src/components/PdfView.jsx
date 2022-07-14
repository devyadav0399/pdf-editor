import React, { useContext } from "react";
import { FileContext } from "./FileContext";

const PdfView = () => {
  const { file64, setFile64 } = useContext(FileContext);

  return (
    <div>
      {file64 ? (
        <div style={{ height: "100vh" }}>
          <object
            data={file64}
            type="application/pdf"
            width="100%"
            height="100%"
          >
            <p>
              Alternative text - include a link{" "}
              <a href="http://africau.edu/images/default/sample.pdf">
                to the PDF!
              </a>
            </p>
          </object>
        </div>
      ) : null}
    </div>
  );
};

export default PdfView;
