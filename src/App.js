import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { EmployeeList } from "./components/EmployeeList";
import { EmployeeDetails } from "./components/EmployeeDetails";
import { Admin } from "./components/Admin";
import { PrivateRoute } from "./components/PrivateRoute";
import { Navbar } from "./components/Navbar";
import { Logout } from "./components/Logout";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
function App() {
  const [data, setEmployeeData] = React.useState([]);

  const fetchdata = () => {
    axios.get("http://localhost:8080/employee").then((res) => {
      setEmployeeData(res.data);
      console.log(res.data);
    });
  };
  React.useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/employees/:id"
          element={
            <PrivateRoute>
              <EmployeeDetails />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/employees" element={<EmployeeList />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
