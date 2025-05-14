import React from "react";
import { Link } from "react-router";

const PaymentSuccess = () => {
  return (
    <div>
      <h1 className="text-2xl text-amber-700 font-bold">
        You Successfully Booked for Our Vaccination Program.
      </h1>
      <span>
        <Link className=" link link-primary text-xs" to={"/dashboard"}>
          Dashboard
        </Link>
      </span>
    </div>
  );
};

export default PaymentSuccess;
