import axios from "axios";
import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

export const EmployeeList = () => {
  const [data, setEmployeeData] = useState([]);

  const fetchdata = () => {
    axios.get("http://localhost:8080/employee").then((res) => {
      setEmployeeData(res.data);
      console.log(res.data);
    });
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      {data.map((e) => (
        <Link to={`/employees/${e.id}`}>
          <div
            className="employee_card"
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "3em",
              height: "300px",
              width: "300px",
            }}
          >
            <img src={e.image} alt="image" className="employee_image" />
            <span className="employee_name">{e.employee_name}</span>
            <span className="employee_title">{e.title}</span>
            <span></span>
          </div>
        </Link>
      ))}
    </div>
  );
};
