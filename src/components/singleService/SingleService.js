import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleService = () => {
  const service = useLoaderData();
  //console.log(service);
  return (
    <div>
      <div>
        <h1 className="text-4xl italic font-bold mt-10 text-center text-white  underline my-20">
          {service.name} Service
        </h1>

        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
          <figure>
            <img src={service.img} alt="Shoes" />
          </figure>
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
      </div>
    </div>
  );
};

export default SingleService;
