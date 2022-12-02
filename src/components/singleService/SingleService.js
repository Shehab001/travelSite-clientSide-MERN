import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useLoaderData, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/Context";
import { ToastContainer } from "react-toastify";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import useDocumentTitle from "../useDocumentTitle";

const SingleService = () => {
  const [reviews, setReviews] = useState([]);
  const [fresh, setFresh] = useState(true);
  const [show, setShow] = useState(null);
  const [spin, setSpin] = useState(false);
  const location = useLocation();
  useDocumentTitle("Travo Service");
  console.log(location);

  const { user, hide, setHide, notify } = useContext(AuthContext);

  //console.log(user.email, user.photoURL);
  const service = useLoaderData();
  const id = service._id;

  // console.log(id);
  //console.log(service.name);

  useEffect(() => {
    setSpin(false);
    fetch(`https://travel-site-backend.vercel.app/review/${service._id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setSpin(true);
      });
  }, [fresh]);

  const handleReview = (event) => {
    setSpin(true);
    event.preventDefault();
    const form = event.target;
    const review = form.review.value;
    // console.log(review);
    //console.log(id);
    const info = {
      title: service.name,
      id: id,
      email: user.email,
      review: review,
      img: service.img,
    };
    // console.log(info);

    fetch("https://travel-site-backend.vercel.app/addreview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setSpin(false);
          notify("Review Added");

          event.target.reset();
          fresh ? setFresh(false) : setFresh(true);
        }
      });
  };

  return (
    <div>
      <ToastContainer />
      <div>
        <h1 className="text-4xl italic font-bold mt-10 text-center text-white  underline my-20">
          {service.name} Service
        </h1>

        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
          <PhotoProvider>
            <PhotoView src={service.img}>
              <figure>
                <img
                  src={service.img}
                  alt="Images"
                  className="cursor-pointer"
                />
              </figure>
            </PhotoView>
          </PhotoProvider>
          <div className="card-body">
            <h2 className="card-title font-bold text-white">
              {service.name}
              <div className="badge badge-secondary">TOP</div>
            </h2>
            <p> {service.title}</p>

            <p className="text-white font-semibold text-left">
              Rating : {service.rating}
            </p>
            <p className="text-white font-semibold  text-left">
              Taken : {service.total_taken}
            </p>
            <p className="text-white font-semibold  text-left">
              Cost : {service.price}
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline cursor-pointer p-5">
                View Details
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //review */}
      <div>
        <h1 className="text-4xl italic font-bold mt-10 text-center text-white  underline my-20">
          {service.name} Review
        </h1>
        {reviews.length === 0 ? (
          <h1 className="text-4xl italic font-bold mt-10 text-center text-white  underline my-20">
            No Reviews Made Yet
          </h1>
        ) : (
          <p></p>
        )}
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 mx-10">
          {reviews.map((review) => (
            <div className="card w-96 bg-base-100 shadow-xl image-full ">
              <figure>
                <img src={service.img} alt="pic" />
              </figure>
              <div className="card-body text-center mt-16">
                <h2 className="text-center font-bold text-4xl text-white">
                  Review : {review?.review}
                </h2>
                <p>Email : {review?.email}</p>
              </div>
            </div>
          ))}
        </div>
        <p
          className="border w-32 border-red-900 p-3 rounded mx-auto text-center mt-10 cursor-pointer text-white"
          onClick={() => (!user?.uid ? setShow(true) : setShow(false))}
        >
          Add Review
        </p>
      </div>
      <div className="w-full mx-auto mt-20">
        {show === false && (
          <form className="pb-20 w-full mx-auto" onSubmit={handleReview}>
            <div className="mb-6 ">
              <label
                htmlFor="review"
                className="block mb-2 text-sm font-medium text-center underline text-white dark:text-gray-300"
              >
                Your Review
              </label>
              <input
                type="text"
                id="review"
                name="review"
                className="bg-black border mx-auto border-gray-300 text-white text-sm rounded-lg w-80 focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Review"
                required
              ></input>
            </div>

            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="w-32 text-white mx-auto bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm   px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
          </form>
        )}
        {show === true && (
          <p className="text-2xl font-bold text-center underline">
            Please <Link to="/login">Log In</Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default SingleService;
