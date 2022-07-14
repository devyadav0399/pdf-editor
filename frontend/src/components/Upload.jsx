import React, { useContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import uploadImage from "../images/file.png";

import { FileContext } from "./FileContext";

const Upload = ({ state, setState }) => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const { file64, setFile64 } = useContext(FileContext);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
    convertToBase64(event.target.files);
  };

  function convertToBase64(file) {
    if (file.length > 0) {
      var fileToLoad = file[0];
      var fileReader = new FileReader();
      var base64;
      fileReader.onload = function (fileLoadedEvent) {
        base64 = fileLoadedEvent.target.result;
        setFile64(base64);
      };
      fileReader.readAsDataURL(fileToLoad);
    }
  }

  const checkPdf = () => {
    if (selectedFile.type === "application/pdf") {
      setIsFilePicked(true);
    } else {
      alert("only PDF Files");
      setIsFilePicked(false);
      setSelectedFile();
    }
  };

  useEffect(() => {
    if (isFilePicked) {
      checkPdf();
      console.log(selectedFile);
    }
  }, [selectedFile]);

  const uploadFile = (e) => {
    e.preventDefault();
    let file = selectedFile;
    const formData = new FormData();

    formData.append("file", file);
    setState(true);

    axios
      .post("/api/upload", formData)
      .then((res) => console.log(res))
      .catch((err) => console.warn(err));
  };

  return (
    <>
      <div className="upload">
        <h2>Upload a PDF file</h2>
        <div className="input-area">
          {!isFilePicked ? (
            <div className="upload-area">
              <label htmlFor="file">
                <input
                  type="file"
                  name="file"
                  onChange={changeHandler}
                  id="file"
                />
                <img src={uploadImage} className="upload-image" />
                Select your file
              </label>
            </div>
          ) : null}
          {isFilePicked ? (
            <div className="file-details">
              <i className="fa fa-info-circle" style={{ fontSize: "24px" }}></i>
              <h2>File Info</h2>
              <p>Filename: {selectedFile.name}</p>
              <p>Filetype: {selectedFile.type}</p>
              <p>Size in kB: {selectedFile.size / 1000}</p>
              <p>
                lastModifiedDate:{" "}
                {selectedFile.lastModifiedDate.toLocaleDateString()}
              </p>
            </div>
          ) : null}
          <div>
            <button
              className="btn"
              onClick={uploadFile}
              disabled={!isFilePicked}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;
