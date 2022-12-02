import React from "react";

import { FadeLoader } from "react-spinners";

// const override: CSSProperties = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// };
const Loader = () => {
  return (
    <div className="w-full">
      <FadeLoader className="w-full mx-auto my-20" color="#36d7b7" />
    </div>
  );
};

export default Loader;
