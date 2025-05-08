import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const LogIn = () => {
  const { logInUser } = useContext(AuthContext);
  return (
    <div className="text-black">
      <h1>This is LogIn page</h1>
      <button
        onClick={() => logInUser("admin@admin.com", "1234")}
        className="btn btn-primary"
      >
        Click Here
      </button>
    </div>
  );
};

export default LogIn;
