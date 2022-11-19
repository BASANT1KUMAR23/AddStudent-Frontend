import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    session_year: "",
    semester: "",
    subject_name: "",
    faculty_name:"",
  });

  const { session_year , semester , subject_name,faculty_name } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Student</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="session_year" className="form-label">Student Name :</label>
              
              <input
                type={"text"}  className="form-control"  placeholder="Enter Your Name" name="session_year"  value={session_year}  onChange={(e) => onInputChange(e)} />
            </div>
            <div className="mb-3">
              <label htmlFor="semester" className="form-label">Registration Number :  </label>
              
            <input  type={"text"}className="form-control"placeholder="Enter your registration number"name="semester"value={semester}   onChange={(e) => onInputChange(e)}  />
            </div>
            <div className="mb-3">
              <label htmlFor="subject_name" className="form-label"> Email :</label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your email"
                name="subject_name"
                value={subject_name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="faculty_name" className="form-label"> Phone No:</label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Phone Number"
                name="faculty_name"
                value={faculty_name}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  );
}
