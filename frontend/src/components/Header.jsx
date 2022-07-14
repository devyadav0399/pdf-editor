import React from "react";

const Header = () => {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <header className="header">
      <h1 onClick={refreshPage}>PDF Editor</h1>
    </header>
  );
};

export default Header;
