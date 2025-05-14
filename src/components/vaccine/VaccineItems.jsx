import React from "react";
import { Link } from "react-router";
import Virus from "../../assets/virus2.jpg";

const VaccineItems = ({ vaccineId, name, date, interval, doctor }) => {
  console.log("Props:", { vaccineId, name, date, interval, doctor });
  console.log("Id", vaccineId);
  return (
    <div className="m-5">
      <div className="group mx-2 mt-10 grid max-w-screen-lg grid-cols-1 space-x-8 overflow-hidden rounded-lg border text-gray-700 shadow transition hover:shadow-lg sm:mx-auto sm:grid-cols-5">
        {/* Image section (not wrapped in Link) */}
        <div className="col-span-2 text-left text-gray-600 hover:text-gray-700">
          <div className="group relative h-full w-full overflow-hidden">
            <img
              src={Virus}
              alt=""
              className="h-full w-fit border-none object-cover text-gray-700 transition group-hover:scale-125"
            />
            <span className="absolute top-2 left-2 rounded-full bg-yellow-200 px-2 text-xs font-semibold text-yellow-600">
              Unity
            </span>
          </div>
        </div>

        {/* Content section */}
        <div className="col-span-3 flex flex-col space-y-3 pr-8 text-left">
          <h2 className="mt-3 overflow-hidden text-2xl font-semibold">
            {name}
          </h2>

          <p className="overflow-hidden text-sm">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
          </p>

          <p className="text-sm font-semibold text-gray-500">
            Doctor: {doctor}
          </p>

          <div className="flex flex-col space-y-20 text-gray-700 sm:flex-row">
            <div className="flex h-fit w-full space-x-2 text-sm font-medium">
              <div className="rounded-full bg-green-100 px-3 py-0.5 text-green-700">
                {date}
              </div>
              <div className="rounded-full bg-blue-100 px-3 py-0.5 text-blue-700">
                {interval} Days
              </div>
            </div>

            {/* ✅ Only this part is clickable */}
            <div className="mt-10">
              <Link to={`/vaccines/${vaccineId}`}>
                {/* <Link> */}
                <button className="btn btn-success my-5 rounded-md px-5 py-2 text-center transition hover:scale-105 text-white sm:ml-auto">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaccineItems;
