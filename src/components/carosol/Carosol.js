import React from "react";

const Carosol = () => {
  return (
    <div>
      <h1 className="italic text-4xl font-bold mt-20 text-white underline text-center">
        Happy Travo Time
      </h1>
      <div className="carousel w-9/12	border border-red-900 mx-auto rounded my-10 ">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://blog.flyticket.com.bd/wp-content/uploads/2020/05/image001-1024x682.jpg"
            className="w-full"
            alt="img"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://blog.flyticket.com.bd/wp-content/uploads/2020/05/image005-1024x684.jpg"
            className="w-full"
            alt="img"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://sgp1.digitaloceanspaces.com/cosmosgroup/news/y8eC0WBzPEEVyKIGGjcM3zKIgirEYLTLvioF3GaP.jpeg"
            className="w-full"
            alt="img"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://blog.flyticket.com.bd/wp-content/uploads/2020/05/image034-1024x678.jpg"
            className="w-full"
            alt="img"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carosol;
