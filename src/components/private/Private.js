import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/Context";

const Private = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  //   if (loading) {
  //     return (
  //       <progress className="progress w-56">
  //         <Loader></Loader>
  //       </progress>
  //     );
  //   }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default Private;
