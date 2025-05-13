import React from "react";
import { FaHome } from "react-icons/fa";
import {
  FaBurger,
  FaPerson,
  FaPersonCirclePlus,
  FaUserDoctor,
} from "react-icons/fa6";
import { ImCalendar } from "react-icons/im";
import { IoPersonAddOutline } from "react-icons/io5";
import { MdReviews, MdVaccines } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import { TbVaccine } from "react-icons/tb";

import { Link } from "react-router";
import Icon from "../../../icon.svg";

const Sidebar = () => {
  const menuItems = [
    { to: "/", icon: FaHome, label: "Home" },
    { to: "/vaccines", icon: TbVaccine, label: "Vaccines" },
    { to: "/vaccines/add", icon: MdVaccines, label: "Add Vaccines" },
    { to: "/doctors", icon: FaUserDoctor, label: "Doctors" },
    { to: "/doctors/add", icon: IoPersonAddOutline, label: "Add Doctors" },
    { to: "/patients", icon: FaPerson, label: "Patients" },
    { to: "/patients/add", icon: FaPersonCirclePlus, label: "Add Patients" },
    { to: "/reviews", icon: MdReviews, label: "Reviews" },
    {
      to: "/dashboard/my-appointment",
      icon: ImCalendar,
      label: "My Appointment",
    },
    { to: "/logout", icon: RiLogoutCircleLine, label: "Log Out" },
  ];
  return (
    <>
      <aside className="bg-gradient-to-br from-gray-800 to-gray-900 -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0">
        <div className="relative border-b border-white/20">
          <a className="flex items-center gap-4 py-6 px-8" href="/">
            <img src={Icon} className="h-6 w-6" />
            <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">
              VaxCare
            </h6>
          </a>
          <button
            className="middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
            type="button"
          >
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              {/* <FaHome /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-5 w-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </span>
          </button>
        </div>

        <div className="m-4">
          <ul className="mb-4 flex flex-col gap-1">
            {menuItems.map((items, index) => (
              <li key={index}>
                <Link aria-current="page" className="" to={items.to}>
                  <button
                    className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                    type="button"
                  >
                    <items.icon className="w-5 h-5 text-inherit" />
                    <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                      {items.label}
                    </p>
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Small device  */}
      <div className="md:hidden drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
            <FaBurger />
          </label>
        </div>
        <div className="drawer-side bg-gray-800">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="m-4">
            <ul className="mb-4 flex flex-col gap-1">
              {menuItems.map((items, index) => (
                <li key={index}>
                  <Link aria-current="page" className="" to={items.to}>
                    <button
                      className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                      type="button"
                    >
                      <items.icon className="w-5 h-5 text-inherit" />
                      <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                        {items.label}
                      </p>
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
