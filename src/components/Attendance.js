import React, { useState, useEffect } from "react";

import HttpClient from "./HttpClient";
import "./style.css";

function Attendance() {
  const [dataInCSV, setDataInCSV] = useState("");

  useEffect(() => {
    HttpClient.get().then(res => setDataInCSV(res));
  }, []);
  
  return (
    <div>
      {dataInCSV && (
        <a
          href={`data:text/csv;charset=utf-8,${escape(dataInCSV)}`}
          download="filename.csv"
        >
          download
        </a>
      )}
    </div>
  );
}

export default Attendance;
