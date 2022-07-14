import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Upload from "./components/Upload";
import View from "./components/View";
import { FileContext } from "./components/FileContext";

function App() {
  const [file64, setFile64] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);
  return (
    <FileContext.Provider value={{ file64, setFile64 }}>
      <div className="App">
        <Header />
        {!isUploaded ? (
          <Upload state={isUploaded} setState={setIsUploaded} />
        ) : null}
        {isUploaded ? <View /> : null}
      </div>
    </FileContext.Provider>
  );
}

export default App;
