import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/Context";
import "./Header.css";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleBtn = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

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
          {user?.uid ? (
            <>
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
            </>
          ) : (
            <p></p>
          )}

          <div>
            <p className="border p-2  mr-3 cursor-pointer border-red-900">
              Review
            </p>
          </div>

          <div>
            <p className="border p-2 mr-3 cursor-pointer border-red-900">
              <Link to="/blogs">Blogs</Link>
            </p>
          </div>
          <div
            className="dropdown dropdown-end tooltip  tooltip-bottom"
            data-tip="Click to open"
          >
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full  ">
                <img src={user?.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {user?.uid ? (
                <li onClick={handleBtn}>
                  <a>Log Out</a>
                </li>
              ) : (
                <>
                  <li>
                    <Link to="/login" className="justify-between">
                      Log In
                    </Link>
                  </li>
                  <li>
                    <Link to="/signin">Sign Up</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
