import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({
    id:"",
    session_year: "",
    semester: "",
    subject_name: "",
    faculty_name:"",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          {/* <h2 className="text-center m-4"></h2> */}

          <div className="card">
            <div className="card-header">
              {/* Details of user id : {user.id} */}
              <ul className="list-group list-group-flush">
              <li className="list-group-item">
                  <b> id  :     </b>
                  {user.id}
                </li>
                <li className="list-group-item">
                  <b> Student Name: </b>
                  {user.session_year}
                </li>
                <li className="list-group-item">
                  <b> Registration Number:    </b>
                  {user.semester }
                </li>
                <li className="list-group-item">
                  <b> Email:   </b>
                  {user.subject_name}
                </li>
                <li className="list-group-item">
                  <b> Phone No:   </b>
                  {user.faculty_name}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/ViewUser.js"}> Back to Home </Link>
        </div>
      </div>
    </div>
  );
}
