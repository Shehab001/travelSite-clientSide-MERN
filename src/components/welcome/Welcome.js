import React from "react";

const Welcome = () => {
  return (
    <div className="text-center mt-32 text-white font-bold">
      <h1 className="text-6xl italic">
        Welcome to <span className="font-bold  italic text-red-900">Travo</span>
      </h1>

      <p className="font-semi bold my-10 text-2xl italic">
        Hassel-free travel guarenteed.
      </p>

      <button className="border p-2 mr-3 cursor-pointer mb-10 border-red-900 rounded">
        Know More
      </button>
      <hr className="w-8/12 mx-auto"></hr>
    </div>
  );
};

export default Welcome;
