import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);

  //console.log(services);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="text-center ">
      <h1 className="text-6xl italic text-white  underline my-20">
        Our Services
      </h1>
      <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 mx-10">
        {services.map((service) => (
          <div className="card w-96 bg-base-100 shadow-xl">
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
        ))}
      </div>

      <button className="border  p-2 mr-3 cursor-pointer my-10 border-red-900 rounded">
        <Link to="/allservices"> See More</Link>
      </button>
    </div>
  );
};

export default Services;
