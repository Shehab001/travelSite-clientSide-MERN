import React from "react";
import Carosol from "../carosol/Carosol";
import Services from "../services/Services";
import useDocumentTitle from "../useDocumentTitle";
import Welcome from "../welcome/Welcome";

const Home = () => {
  useDocumentTitle("Travo");
  return (
    <div>
      <Welcome></Welcome>
      <Services></Services>
      <Carosol></Carosol>
    </div>
  );
};

export default Home;
