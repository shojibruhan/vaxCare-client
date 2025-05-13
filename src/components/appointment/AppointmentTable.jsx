import React from "react";
import Virus1 from "../../assets/virus.png";
import Virus2 from "../../assets/virus2.jpg";

const AppointmentTable = ({ item }) => {
  return (
    <>
      <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
        <div className="pb-4 md:pb-8 w-full md:w-40">
          <img className="w-full hidden md:block" src={Virus1} alt="dress" />
          <img className="w-full md:hidden" src={Virus2} alt="dress" />
        </div>
        <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
          <div className="w-full flex flex-col justify-start items-start space-y-8">
            <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
              Vaccine Name
            </h3>
            <div className="flex justify-start items-start flex-col space-y-2">
              <p className="text-sm dark:text-white leading-none text-gray-800">
                <span className="dark:text-gray-400 text-gray-300 mr-2">
                  First Dose:
                </span>
                <span className="px-1 py-0.5 bg-success text-xs rounded-lg shadow-md">
                  {item.dose_one}
                </span>
              </p>
              <p className="text-sm dark:text-white leading-none text-gray-800">
                <span className="dark:text-gray-400 text-gray-300 mr-2">
                  Second Dose:
                </span>
                <span className="px-1 py-0.5 bg-secondary text-xs rounded-lg shadow-md">
                  {item.dose_two === null ? "Not Available" : item.dose_two}
                </span>
              </p>
              <p className="text-sm dark:text-white leading-none text-gray-800">
                <span className="dark:text-gray-400 text-gray-300 mr-2">
                  Status:
                </span>
                <span className="px-1 py-0.5 bg-info text-xs rounded-lg shadow-md">
                  {item.status}
                </span>
              </p>
            </div>
          </div>
          <div className="flex justify-end space-x-8 items-start w-full">
            <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
              $36.00
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentTable;
