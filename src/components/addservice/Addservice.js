import React, { useContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "../../context/Context";
import Loader from "../Loader";
import useDocumentTitle from "../useDocumentTitle";

const Addservice = () => {
  const { notify } = useContext(AuthContext);
  const [spin, setSpin] = useState(false);
  useDocumentTitle("Travo Add Service");
  const handleForm = (event) => {
    setSpin(true);
    event.preventDefault();

    const form = event.target;

    const service = form.service.value;
    const des = form.des.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const taken = form.taken.value;
    const url = form.url.value;
    // console.log(service, des, rating, price, taken, url);

    const add = {
      name: service,
      rating: rating,
      total_taken: taken + " K",
      price: "৳ " + price,
      title: des,
      img: url,
    };
    //console.log(add);
    fetch("https://travel-site-backend.vercel.app/addservice", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(add),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setSpin(false);
          notify("Service added successfully.");
          event.target.reset();
        }
      });
  };
  return (
    <div className="w-full	mx-auto  p-5 rounded">
      <ToastContainer />
      <h1 className="font-bold underline text-center text-4xl italic mb-10">
        Add Service
      </h1>
      {spin === true ? (
        <Loader></Loader>
      ) : (
        <form className=" w-full mx-auto text-center" onSubmit={handleForm}>
          <div className="form-control mb-5 w-full mx-auto ">
            <label className="input-group input-group-sm w-3/12 mx-auto">
              <span className="w-40 mx-auto"> Name </span>
              <input
                required
                name="service"
                type="text"
                placeholder="Service Name"
                className="input input-bordered input-sm "
              />
            </label>
          </div>
          <div className="form-control mb-5 w-3/12 mx-auto ">
            <label className="input-group input-group-sm">
              <span>Description</span>
              <input
                required
                name="des"
                type="text"
                placeholder="Description"
                className="input input-bordered input-sm"
              />
            </label>
          </div>
          <div className="form-control mb-5 w-3/12 mx-auto ">
            <label className="input-group input-group-sm">
              <span>Rating </span>
              <input
                required
                name="rating"
                type="text"
                placeholder="Out of 5"
                className="input input-bordered input-sm"
              />
            </label>
          </div>
          <div className="form-control mb-5 w-3/12 mx-auto ">
            <label className="input-group input-group-sm">
              <span>Taken</span>
              <input
                required
                name="taken"
                type="text"
                placeholder="Total Taken in K"
                className="input input-bordered input-sm"
              />
            </label>
          </div>
          <div className="form-control mb-5 w-3/12 mx-auto ">
            <label className="input-group input-group-sm">
              <span>Price</span>
              <input
                required
                name="price"
                type="text"
                placeholder="Price"
                className="input input-bordered input-sm"
              />
            </label>
          </div>
          <div className="form-control mb-10 w-3/12 mx-auto ">
            <label className="input-group input-group-sm">
              <span>Image Url</span>
              <input
                required
                name="url"
                type="text"
                placeholder="Image Url"
                className="input input-bordered input-sm"
              />
            </label>
          </div>

          <button
            type="submit"
            className=" mb-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Addservice;
