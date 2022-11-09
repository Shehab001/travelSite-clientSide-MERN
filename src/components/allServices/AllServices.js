import React, { useEffect, useState } from "react";

const AllServices = () => {
  const [services, setServices] = useState([]);

  //console.log(services);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return <div></div>;
};

export default AllServices;
