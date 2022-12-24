import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import useDocumentTitle from "../useDocumentTitle";
import Loader from "../Loader";

const AllServices = () => {
  const [allservices, setAllservices] = useState([]);
  const [spin, setSpin] = useState(false);
  useDocumentTitle("Travo Services");
  //console.log(services);

  useEffect(() => {
    setSpin(true);
    fetch("https://travel-site-backend.vercel.app/allservices")
      .then((res) => res.json())
      .then((data) => {
        setAllservices(data);
        setSpin(false);
      });
  }, []);
  return (
    <div>
      <h1 className="text-6xl italic mt-10 text-center text-white  underline my-20">
        All Services
      </h1>

      {spin ? (
        <div className="w-32 mx-auto">
          <Loader></Loader>
        </div>
      ) : (
        <div className="grid mx-auto grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {allservices.map((service) => (
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
                    <Link to={`/singleservice/${service._id}`}>
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllServices;
