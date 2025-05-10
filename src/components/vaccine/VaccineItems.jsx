import React from "react";

const VaccineItems = ({ name, date, interval }) => {
  return (
    // <div className="card card-side bg-gray-100  shadow-sm">
    //   <figure className="w-7xl">
    //     <img
    //       className=""
    //       src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
    //       alt="Movie"
    //     />
    //   </figure>
    //   <div className="card-body">
    //     <h2 className="card-title">{name}</h2>
    //     <p className="w-1/2">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsam
    //       assumenda, error aut iure commodi quasi rerum impedit sapiente
    //       eveniet, dolores, maxime minima perspiciatis blanditiis autem ea
    //       molestiae ratione sint saepe. Voluptas saepe quidem nostrum asperiores
    //       repellat pariatur quae voluptatum, veritatis voluptates iste ullam
    //       voluptatibus sed quas officia aliquam illum.
    //     </p>
    //     <p className="font-bold text-shadow-2xs">
    //       First Dose:
    //       <span className="px-2 py-1 bg-amber-300 rounded-md shadow-md text-gray-600 ml-3">
    //         {date}
    //       </span>
    //     </p>
    //     <p className="font-bold text-shadow-2xs">
    //       Second Dose:
    //       <span className="bg-info px-2 py-1 rounded-md shadow-sm text-white mx-2">
    //         {interval} days
    //       </span>
    //       after first dose
    //     </p>
    //     <div className="card-actions justify-end">
    //       <button className="btn btn-primary">Book Now!</button>
    //     </div>
    //   </div>
    // </div>
    <div className="m-5">
      <div className="group mx-2 mt-10 grid max-w-screen-lg grid-cols-1 space-x-8 overflow-hidden rounded-lg border text-gray-700 shadow transition hover:shadow-lg sm:mx-auto sm:grid-cols-5">
        <a
          href="#"
          className="col-span-2 text-left text-gray-600 hover:text-gray-700"
        >
          <div className="group relative h-full w-full overflow-hidden">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              alt=""
              className="h-full w-full border-none object-cover text-gray-700 transition group-hover:scale-125"
            />
            <span className="absolute top-2 left-2 rounded-full bg-yellow-200 px-2 text-xs font-semibold text-yellow-600">
              Unity
            </span>
            <img
              src="/images/AnbWyIjnwNbW9Wz6c_cja.svg"
              className="absolute inset-1/2 w-10 max-w-full -translate-x-1/2 -translate-y-1/2 transition group-hover:scale-125"
              alt=""
            />
          </div>
        </a>
        <div className="col-span-3 flex flex-col space-y-3 pr-8 text-left">
          <a href="#" className="mt-3 overflow-hidden text-2xl font-semibold">
            {name}
          </a>
          <p className="overflow-hidden text-sm">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna .
          </p>
          <a
            href="#"
            className="text-sm font-semibold text-gray-500 hover:text-gray-700"
          >
            Ben Awad
          </a>

          <div className="flex flex-col space-y-20  text-gray-700 sm:flex-row">
            <div className="flex h-fit w-full space-x-2 text-sm font-medium">
              <div className="rounded-full bg-green-100 px-3 py-0.5 text-green-700">
                {date}
              </div>

              <div className="rounded-full bg-blue-100 px-3 py-0.5 text-blue-700">
                {interval} Days
              </div>
            </div>
            {/* <a
              href="#"
              className="my-5 rounded-md px-5 py-2 text-center transition hover:scale-105 bg-orange-600 text-white sm:ml-auto"
            >
              Book an Appointment
            </a> */}
            <div className="mt-10 ">
              <button className="btn btn-primary my-5 rounded-md px-5 py-2 text-center transition hover:scale-105 text-white sm:ml-auto">
                Book an Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaccineItems;
