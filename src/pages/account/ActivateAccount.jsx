import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import ErrorAlert from "../../components/alert/ErrorAlert";
import SuccessAlert from "../../components/alert/SuccessAlert";
import apiClient from "../../services/api-client";

const ActivateAccount = () => {
  const { uid, token } = useParams();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    apiClient
      .post("/auth/users/activation/", { uid, token })
      .then((res) => {
        setMessage("You Successfully Create an Account.");
        console.log(res.data);
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      })
      .catch((error) => {
        setError("Something Went Wrong. Please Check Your Activation Link");
        console.log(error);
      });
  }, []);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="card bg-gray-800 shadow-md shadow-gray-800 p-6">
        <h2 className="text-2xl font-bold mb-5 text-center">
          Account Activation
        </h2>
        {message && <SuccessAlert msg={message} />}
        {error && <ErrorAlert error={error} />}
      </div>
    </div>
  );
};

export default ActivateAccount;
