import React from 'react'
import { Navigate, useNavigate } from "react-router-dom";

function ProtectedRoute(props) {
    const navigate = useNavigate();
    if (localStorage.getItem("token")) {
        return props.children;
      } else {
        return <Navigate to="/login" />;
      }
}

export default ProtectedRoute