import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <div className="navbar bg mt-3">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl w-24	">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/dc9bjecdl/image/upload/v1667949925/Assignment%2011/beach-tour-logo-4505456896-seeklogo.com_hnehgp.png"
                alt="logo"
              ></img>
            </Link>
            <span className="font-bold  italic text-red-900">Travo</span>
          </a>
        </div>
        <div className="flex-none">
          <div>
            <p className="border p-2 mr-3 cursor-pointer border-red-900">
              Add Services
            </p>
          </div>
          <div>
            <p className="border p-2  mr-3 cursor-pointer border-red-900">
              My Review
            </p>
          </div>
          <div>
            <p className="border p-2 mr-3 cursor-pointer border-red-900">
              <Link to="/blogs">Blog</Link>
            </p>
          </div>
          <div
            className="dropdown dropdown-end tooltip  tooltip-bottom"
            data-tip="Log Out"
          >
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full  ">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">Log In</a>
              </li>
              <li>
                <a>Sign In</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
