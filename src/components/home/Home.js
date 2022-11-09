import React from "react";
import Carosol from "../carosol/Carosol";
import Services from "../services/Services";
import Welcome from "../welcome/Welcome";

const Home = () => {
  return (
    <div>
      <Welcome></Welcome>
      <Services></Services>
      <Carosol></Carosol>
    </div>
  );
};

export default Home;
