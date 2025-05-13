import React, { useEffect } from "react";
import useBookingContext from "../hooks/useBookingContext";

const Booking = () => {
  const { createAppointment } = useBookingContext();

  useEffect(() => {
    createAppointment();
  }, []);
  return (
    <div>
      <h1 className="text-black">This is Booking Page</h1>
    </div>
  );
};

export default Booking;
