import React, { createContext } from "react";
import useBooking from "../hooks/useBooking";

const BookingContext = createContext();
export const BookingProvider = ({ children }) => {
  const allValue = useBooking();
  return (
    <BookingContext.Provider value={allValue}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingContext;
