import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Context";
import "./Header.css";
import { ToastContainer } from "react-toastify";

const Header = () => {
  const { user, logOut, hide, setHide, notify } = useContext(AuthContext);
  //console.log(user?.photoURL);
  let navigate = useNavigate();

  const handleBtn = () => {
    logOut()
      .then(() => {
        notify("Successfully Logged Out");
        setHide(true);
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <ToastContainer />
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
        <div className="flex-none font-bold">
          {user?.uid ? (
            <>
              <div>
                <p className="border p-2 mr-3 cursor-pointer border-red-900">
                  <Link to="/addservice">Add Service</Link>
                </p>
              </div>
              <div>
                <p className="border p-2  mr-3 cursor-pointer border-red-900">
                  <Link to="/myreview">My Review</Link>
                </p>
              </div>
            </>
          ) : (
            <p></p>
          )}

          {/* <div>
            <p className="border p-2  mr-3 cursor-pointer border-red-900">
              Review
            </p>
          </div> */}

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
                {user?.uid ? (
                  <img
                    src={user?.photoURL}
                    alt="user"
                    referrerPolicy="no-referrer"
                  ></img>
                ) : (
                  <img
                    src="https://toppng.com/uploads/preview/app-icon-set-login-icon-comments-avatar-icon-11553436380yill0nchdm.png"
                    alt="user"
                  />
                )}
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
