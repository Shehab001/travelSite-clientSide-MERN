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
            src="https://travelvibe.net/wp-content/uploads/2021/03/Most-attractive-tourist-attraction-of-bangladesh-saint-martin-e1615271792566.jpg"
            className="w-full"
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
            src="https://mcmscache.epapr.in/post_images/website_350/post_15710268/thumb.jpg"
            className="w-full"
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
            src="https://1.bp.blogspot.com/-FVIvRrsPeHk/XcGNxjdFMhI/AAAAAAAAB34/6bqMyyxVkZUkqbcY9p4BtdmblytP_Ct-wCKgBGAsYHg/s1600/bandarban.jpg"
            className="w-full"
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
