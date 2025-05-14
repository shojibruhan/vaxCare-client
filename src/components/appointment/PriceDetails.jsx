import React, { useState } from "react";
import authApiClient from "../../services/auth-api-client";

const PriceDetails = ({ item }) => {
  const [isLoading, setLoading] = useState(false);
  const handlePayment = async () => {
    setLoading(true);
    try {
      const response = await authApiClient.post("/payment/initiate/", {
        amount: 100,
        bookingId: item.id,
      });
      console.log("payment data: ", response);
      if (response.data.payment_url) {
        setLoading(false);
        window.location.href = response.data.payment_url;
      } else {
        alert("Payment Failed.");
      }
    } catch (error) {
      console.log("payment error: ", error);
    }
  };
  return (
    <>
      {/* Summary  */}
      <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
        <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
          Summary
        </h3>
        <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
          <div className="flex justify-between w-full">
            <p className="text-base dark:text-white leading-4 text-gray-800">
              Subtotal
            </p>
            <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
              $56.00
            </p>
          </div>
          <div className="flex justify-between items-center w-full">
            <p className="text-base dark:text-white leading-4 text-gray-800">
              Discount{" "}
              <span className="bg-gray-200 p-1 text-xs font-medium dark:bg-white dark:text-gray-800 leading-3 text-gray-800">
                STUDENT
              </span>
            </p>
            <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
              -$28.00 (50%)
            </p>
          </div>
          <div className="flex justify-between items-center w-full">
            <p className="text-base dark:text-white leading-4 text-gray-800">
              Shipping
            </p>
            <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
              $8.00
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">
            Total
          </p>
          <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">
            $36.00
          </p>
        </div>
      </div>

      {/* Shipping */}
      <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
        <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
          Shipping
        </h3>
        <div className="flex justify-between items-start w-full">
          <div className="flex justify-center items-center space-x-4">
            <div className="w-8 h-8">
              <img
                className="w-full h-full"
                alt="logo"
                src="https://i.ibb.co/L8KSdNQ/image-3.png"
              />
            </div>
            <div className="flex flex-col justify-start items-center">
              <p className="text-lg leading-6 dark:text-white font-semibold text-gray-800">
                DPD Delivery
                <br />
                <span className="font-normal">Delivery with 24 Hours</span>
              </p>
            </div>
          </div>
          <p className="text-lg font-semibold leading-6 dark:text-white text-gray-800">
            $8.00
          </p>
        </div>
        <div className="w-full flex justify-center items-center">
          <button
            disabled={isLoading}
            onClick={handlePayment}
            className="hover:bg-black dark:bg-info dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white"
          >
            {isLoading ? (
              <span className="loading loading-dots loading-md"></span>
            ) : (
              "Pay Now"
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default PriceDetails;
