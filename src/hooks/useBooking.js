import { useState } from "react";
import apiClient from "../services/api-client";

const useBooking = () => {
  const [authTokens, setAuthTokens] = useState(
    () => JSON.parse(localStorage.getItem("authTokens")).access
  );
  const createAppointment = async (userData) => {
    try {
      const response = await apiClient.post("/bookings/", userData, {
        headers: { Authorization: `JWT ${authTokens}` },
      });
      console.log("createAppointment :", response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return { createAppointment };
};

export default useBooking;
