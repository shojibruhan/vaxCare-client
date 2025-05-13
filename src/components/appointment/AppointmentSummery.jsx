import React from "react";
import useAuthContext from "../../hooks/useAuthContext";
import DashboardProfile from "../../pages/dashboard/profile/DashboardProfile";
import AppointmentTable from "./AppointmentTable";
import PriceDetails from "./PriceDetails";

const AppointmentSummery = ({ items }) => {
  console.log(items);
  const { user } = useAuthContext();
  return (
    <div className="py-14 md:px-1 2xl:px-20 md:container md:mx-auto">
      <div className="flex justify-start item-start space-y-2 flex-col text-primary">
        <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-success">
          Appointment Id:
        </h1>
        <p className="text-base dark:text-gray-700 font-medium leading-6 text-gray-600">
          {items.id}
        </p>
      </div>
      <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
          {/* Appointment table  */}
          <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
            <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">
              Appointment Details
            </p>
            <AppointmentTable item={items} />
            {/* {Array.isArray(items) ? (
              items.map((item) => (
                <AppointmentTable key={item.id} item={item} />
              ))
            ) : (
              <AppointmentTable item={items} />
            )} */}
          </div>
          <div className="flex justify-center flex-col md:flex-row  items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
            {/* Price & Shipping  */}
            <PriceDetails />
          </div>
        </div>
        {/* Customer Details */}

        <DashboardProfile user={user} />
      </div>
    </div>
  );
};

export default AppointmentSummery;
