import React from "react";

function JsonDataDisplay({ JsonData }) {
  const DisplayData = JsonData.map((info, index) => {
    return (
      <tr key={index}>
        <td>{info.Sno}</td>
        <td>{info.Name}</td>
        <td>{info.Genre}</td>
      </tr>
    );
  });

  return (
    <div className="table-div">
      <table className="extracted-data">
        <thead>
          <tr>
            <th>S No.</th>
            <th>Name</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}

export default JsonDataDisplay;
