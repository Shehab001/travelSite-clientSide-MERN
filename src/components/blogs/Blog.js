import React from "react";

const Blog = () => {
  return (
    <div className="w-9/12 mx-auto my-16 ">
      <h1 className="text-6xl italic underline text-center text-white">
        Blogs
      </h1>
      <div className="collapse border border-red-900 mt-10 mb-5">
        <input type="checkbox" />
        <div className="collapse-title relative text-white text-xl font-medium">
          Difference between SQL and NoSQL.
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 absolute top-5 right-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </div>
        <div className="collapse-content">
          <p>
            SQL is the programming language used to interface with relational
            databases. (Relational databases model data as records in rows and
            tables with logical links between them). NoSQL is a class of DBMs
            that are non-relational and generally do not use SQL.
          </p>
        </div>
      </div>
      {/* ------------- */}
      <div className="collapse border border-red-900 mt-10 mb-5">
        <input type="checkbox" />
        <div className="collapse-title relative text-white text-xl font-medium">
          What is JWT, and how does it work?
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 absolute top-5 right-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </div>
        <div className="collapse-content">
          <p>
            JWT, or JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. JWTs differ
            from other web tokens in that they contain a set of claims. Claims
            are used to transmit information between two parties. What these
            claims are depends on the use case at hand. For example, a claim may
            assert who issued the token, how long it is valid for, or what
            permissions the client has been granted.
          </p>
        </div>
      </div>
      {/* ------------- */}
      <div className="collapse border border-red-900 mt-10 mb-5">
        <input type="checkbox" />
        <div className="collapse-title relative text-white text-xl font-medium">
          What is the difference between javascript and NodeJS?
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 absolute top-5 right-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </div>
        <div className="collapse-content">
          <p>
            JavaScript is a simple programming language that can be used with
            any browser that has the JavaScript Engine installed. Node. js, on
            the other hand, is an interpreter or execution environment for the
            JavaScript programming language.
          </p>
        </div>
      </div>
      {/* ------------- */}
      <div className="collapse border border-red-900 mt-10 mb-5">
        <input type="checkbox" />
        <div className="collapse-title relative text-white text-xl font-medium">
          What is the difference between javascript and NodeJS?
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 absolute top-5 right-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </div>
        <div className="collapse-content">
          <p>
            How NodeJS handle multiple client requests? NodeJS receives multiple
            client requests and places them into EventQueue. NodeJS is built
            with the concept of event-driven architecture. NodeJS has its own
            EventLoop which is an infinite loop that receives requests and
            processes them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
