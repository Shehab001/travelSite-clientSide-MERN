import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/Context";
import { ToastContainer } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import useDocumentTitle from "../useDocumentTitle";

const Myreview = () => {
  const [myreview, setMyreview] = useState([]);
  const [id, setId] = useState({});
  const [refresh, setRefresh] = useState(false);
  const { user, notify } = useContext(AuthContext);
  const [spin, setSpin] = useState(true);
  useDocumentTitle("Travo Review Page");
  // console.log(myreview.length);
  const xx = user?.email;
  // console.log(xx);
  useEffect(() => {
    fetch(`http://localhost:5000/myreview/${xx}`)
      .then((res) => res.json())
      .then((data) => {
        setMyreview(data);
        setSpin(false);
      });
  }, [refresh, xx]);

  const handleForm = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = { review: `${form.review.value}` };
    //console.log(name);

    fetch(`http://localhost:5000/updatereview/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(name),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          // alert(refresh);
          notify("Review Modified.");
          if (refresh === true) {
            setRefresh(false);
          } else {
            setRefresh(true);
          }
          // console.log(data);
        }
      });
    form.reset();
  };

  const deleteReview = () => {
    fetch(`http://localhost:5000/deletereview/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        if (data.deletedCount > 0) {
          notify("Review Deleted.");
          if (refresh === true) {
            setRefresh(false);
          } else {
            setRefresh(true);
          }
        }
      });
  };

  return (
    <div>
      <ToastContainer />

      {myreview.length === 0 ? (
        <h1 className="text-4xl italic font-bold mt-10 text-center text-white  underline my-20">
          No Reviews
        </h1>
      ) : (
        <h1 className="text-4xl italic font-bold mt-10 text-center text-white  underline my-20">
          My Reviews
        </h1>
      )}
      <div className="w-32 mx-auto ">
        {Myreview ? (
          <ClipLoader
            color={"#ff0000"}
            loading={spin}
            // cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <p></p>
        )}
      </div>
      <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 mx-10">
        {myreview.map((review) => (
          <div className="card w-96 bg-base-100 shadow-xl image-full ">
            <figure>
              <img src={review.img} alt="pic" />
            </figure>
            <div className="card-body text-center mt-16 pb-20">
              <h2 className="text-center font-bold text-4xl text-white">
                {review?.title}
              </h2>
              <p>Review : {review?.review}</p>
              <p>Email : {review?.email}</p>
              {/* <button className="w-32" onClick={() => alert(review._id)}>
                HI
              </button> */}
            </div>
            <div className="relative">
              <p className="mt-5 absolute z-30 bottom-2 left-24 pl-5">
                <span>
                  {/* The button to open modal */}
                  <label
                    onClick={() => setId(review._id)}
                    htmlFor="my-modal-3"
                    className="btn text-white font-semibold p-2 border cursor-pointer border-red-900"
                  >
                    Edit
                  </label>

                  {/* Put this part before </body> tag */}
                  <input
                    type="checkbox"
                    id="my-modal-3"
                    className="modal-toggle"
                  />
                  <div className="modal">
                    <div className="modal-box relative">
                      <label
                        htmlFor="my-modal-3"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                      >
                        ✕
                      </label>
                      <h3 className="text-lg font-bold mb-10 underline">
                        Edit Review
                      </h3>
                      <form className="pb-10" onSubmit={handleForm}>
                        <div className="mb-6">
                          <label
                            htmlFor="review"
                            className="block mb-2 text-sm font-medium text-left text-white dark:text-gray-300"
                          >
                            Your Review
                          </label>
                          <input
                            type="text"
                            id="review"
                            name="review"
                            className="bg-black border border-gray-300 text-white text-sm rounded-lg w-80 focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Your Review"
                            required
                          ></input>
                        </div>

                        <button
                          type="submit"
                          className="text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/2 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </span>
                <span>
                  {/* The button to open modal */}
                  {/* <a
                    onClick={() => setId(review._id)}
                    href="#my-modal-2"
                    className="btn  ml-5 text-white font-semibold p-2 border cursor-pointer border-red-900"
                  >
                    Delete
                  </a> */}

                  {/* <div className="modal" id="my-modal-2">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">Are you sure?</h3>

                      <div className="modal-action">
                        <p
                          onClick={deleteReview}
                          className="btn px-3 text-white font-semibold p-2 border cursor-pointer border-red-900"
                        >
                          Yes
                        </p>
                      </div>
                    </div>
                  </div> */}
                  {/* The button to open modal */}

                  <label
                    htmlFor="my-modal-4"
                    className="btn  border cursor-pointer border-red-900"
                    onClick={() => setId(review._id)}
                  >
                    Delete
                  </label>

                  {/* Put this part before </body> tag */}
                  <input
                    type="checkbox"
                    id="my-modal-4"
                    className="modal-toggle"
                  />
                  <label htmlFor="my-modal-4" className="modal cursor-pointer">
                    <label className="modal-box relative" htmlFor="">
                      <h3 className="text-lg font-bold">Are you sure?</h3>
                      <p
                        onClick={deleteReview}
                        className="btn px-3 fixed right-5 bottom-3 text-white font-semibold p-2 border cursor-pointer border-red-900"
                      >
                        Yes
                      </p>
                    </label>
                  </label>
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myreview;
