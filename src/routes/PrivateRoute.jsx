import React from "react";
import { Navigate } from "react-router";
import Loading from "../components/alert/Loading";
import useAuthContext from "../hooks/useAuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useAuthContext();
  // console.log("private", user);
  if (user === null) return <Loading />;
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
