import React from "react";
import { Link } from "react-router";
import useAuthContext from "../hooks/useAuthContext";

const NavBar = () => {
  const { user, logOutUser } = useAuthContext();
  // console.log("Navbar: ", user);
  return (
    <div className="navbar bg-primary shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/vaccine">Vaccine</Link>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/doctors">Doctors</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xs w-18 h-18">
          <img src="../../icon.svg" alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/vaccine">Vaccine</Link>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to="/doctors">Doctors</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <Link onClick={logOutUser} className="btn">
            Log Out
          </Link>
        ) : (
          <div className="flex flex-row">
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="btn m-1 ml-20">
                Register
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm ml-20"
              >
                <li>
                  <Link to="/register/doctor/">As A Doctor</Link>
                </li>
                <li>
                  <Link to="/register/patient/">As A Patient</Link>
                </li>
              </ul>
            </div>
            <div className="btn m-1 ml-20">
              <Link to="/login">Log In</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
