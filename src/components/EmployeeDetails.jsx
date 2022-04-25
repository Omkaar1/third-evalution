import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const EmployeeDetails = () => {
  const [employee, setEmployee] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/employee/${id}`)
      .then((res) => setEmployee(res.data));
  }, []);

  // var number = Math.floor(Math.random() *(5000))
  console.log(employee);
  return (
    <div className="user_details">
      <img className="user_image" />
      <h4 className="user_name"></h4>
      <span className="user_salary">$</span>
      <span className="tasks">
        <li className="task"></li>
      </span>
      Status: <b className="status"></b>
      Title: <b className="title"></b>
      {/* Show this button only if user is not already terminated (users status is working) */}
      <button className="fire">Fire Employee</button>
      {/* Show this button only if user is not already team lead or terminated */}
      <button className="promote">promote</button>
    </div>
  );
};
