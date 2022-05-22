// import React from 'react'

// function Attendance() {
//   return (
//     <div>

//     </div>
//   )
// }

// export default Attendance
import React, { useState, useEffect } from "react";

import HttpClient from "./HttpClient";

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
          download="log.csv"
        >
          Download
        </a>
      )}
    </div>
  );
}

export default Attendance;
