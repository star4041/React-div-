import React from "react";

const Table = ({ data }) => {
  const columns = data[0] && Object.keys(data[0]);

  return (
    <div className="Table">
      <div
        className="TableRow"
        style={{ background: "linear-gradient(to right, #ff5858, #f857a6)" }}
      >
        {data[0] &&
          columns.map((heading) => <div className="TableHead">{heading}</div>)}
      </div>

      {data.map((row) => (
        <div className="TableRow">
          {columns.map((column) => (
            <div className="TableCell">{row[column]}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Table;
