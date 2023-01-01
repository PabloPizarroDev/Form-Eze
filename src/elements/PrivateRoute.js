import React from "react";
import { Navigate, Outlet } from "react-router-dom";
/* 
let isLogged;

isLogged = null; 
 isLogged = true; */

const PrivateRoute = ({ isLogged }) => {
  return isLogged ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
