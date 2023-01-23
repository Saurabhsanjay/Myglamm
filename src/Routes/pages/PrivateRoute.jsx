import React from "react";
import { useContext } from "react";

import { Navigate } from "react-router-dom";
import AppContext from "../../context/Appcontext";


function PrivateRoute({ children }) {
  const {isAuth}=useContext(AppContext)
  
  
  console.log(isAuth,"local");

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;
