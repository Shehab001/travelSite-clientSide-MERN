import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/Context";

const Myreview = () => {
  const [myreview, setMyreview] = useState([]);
  const { user } = useContext(AuthContext);
  // console.log(myreview.length);
  const xx = user?.email;
  // console.log(xx);
  useEffect(() => {
    fetch(`http://localhost:5000/myreview/${xx}`)
      .then((res) => res.json())
      .then((data) => setMyreview(data));
  }, [user]);
  return (
    <div>
      {myreview.length === 0 ? (
        <h1 className="text-4xl italic font-bold mt-10 text-center text-white  underline my-20">
          No Reviews
        </h1>
      ) : (
        <h1 className="text-4xl italic font-bold mt-10 text-center text-white  underline my-20">
          My Reviews
        </h1>
      )}
      <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 mx-10">
        {myreview.map((review) => (
          <div className="card w-96 bg-base-100 shadow-xl image-full ">
            <figure>
              <img src={review.img} alt="pic" />
            </figure>
            <div className="card-body text-center mt-16">
              <h2 className="text-center font-bold text-4xl text-white">
                {review?.title}
              </h2>
              <p>Review : {review?.review}</p>
              <p>Email : {review?.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myreview;
