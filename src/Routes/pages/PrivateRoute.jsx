import React from "react";

import { Navigate } from "react-router-dom";


function PrivateRoute({ children }) {
  
  
  const isAuth  = JSON.parse(localStorage.getItem("username"))
  console.log(isAuth,"local");

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;
