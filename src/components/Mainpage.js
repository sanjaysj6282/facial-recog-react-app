import React from "react";
import { Link } from 'react-router-dom';

function Mainpage() {
  return (
    <div>
      <div className="container my-3">
        <h2 className="mb-5 blue">Welcome to Smart Face recognition system</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="Images/add_attendance.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Register new Student</h5>
                <p className="card-text">
                  To add new student.
                </p>
                <Link to="/facecollector" className="btn btn-primary">
                  Click here
                </Link>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="Images/verify_attendance.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Add attendance</h5>
                <p className="card-text">
                  To register attendance.
                </p>
                <a href="/" className="btn btn-primary">
                  Click here
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="Images/view_attendance.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">View Attendance</h5>
                <p className="card-text">
                  To View attendance.
                </p>
                <a href="/" className="btn btn-primary">
                  Click here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
