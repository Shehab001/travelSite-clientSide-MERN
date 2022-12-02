import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { PhotoProvider, PhotoView } from "react-photo-view";

const Services = () => {
  const [services, setServices] = useState([]);
  const [spin, setSpin] = useState(true);

  //console.log(services);

  useEffect(() => {
    fetch("https://travel-site-backend.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setSpin(false);
      });
  }, []);
  return (
    <div className="text-center ">
      <h1 className="text-6xl italic text-white  underline my-20">
        Our Services
      </h1>
      {services ? (
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
      <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center	">
        {services.map((service) => (
          <div className="card w-96 bg-base-100 shadow-xl">
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
              <p> {service.title.slice(0, 100)}</p>

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
                  <Link to={`/singleservice/${service._id}`}>View Details</Link>
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
