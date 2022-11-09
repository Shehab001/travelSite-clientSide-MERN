import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
//import "./Login.css";
//import { AuthContext } from "../../Context/Context";

const LogIn = () => {
  // const { signIn, providerLogin } = useContext(AuthContext);
  // //console.log(user?.displayName);

  // // // const [user, setUser] = useState({});
  // const [error, setError] = useState("");
  // const [success, setSuccess] = useState(false);
  // const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";

  // const googleProvider = new GoogleAuthProvider();
  // const provider = new GithubAuthProvider();

  // //console.log(from);

  // const handleBtn1 = () => {
  //   providerLogin(provider)
  //     .then((result) => {
  //       // This gives you a GitHub Access Token. You can use it to access the GitHub API.
  //       const credential = GithubAuthProvider.credentialFromResult(result);
  //       const token = credential.accessToken;

  //       // The signed-in user info.
  //       const user = result.user;
  //       //console.log(user);
  //       // setUser(user);
  //       navigate(from, { replace: true });
  //       // ...
  //     })
  //     .catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(errorMessage);
  //       // The email of the user's account used.
  //       const email = error.customData.email;
  //       // The AuthCredential type that was used.
  //       const credential = GithubAuthProvider.credentialFromError(error);
  //       // ...
  //     });
  // };

  // const handleBtn = () => {
  //   // signInWithPopup(googleProvider)

  //   providerLogin(googleProvider)
  //     .then((result) => {
  //       const user = result.user;
  //       // setUser(user);
  //       navigate(from, { replace: true });
  //       console.log(user);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const handleForm = (event) => {
  //   event.preventDefault();

  //   setSuccess(false);

  //   const form = event.target;
  //   const name = form.email.value;
  //   const pass = form.password.value;
  //   //console.log(name, pass);

  //   signIn(name, pass)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       // console.log(user);
  //       // ...
  //       setSuccess(true);
  //       setError("");
  //       //setUser(user);
  //       // console.log(user);
  //       navigate(from, { replace: true });
  //     })
  //     .catch((error) => {
  //       const errorMessage = error.message;
  //       setError(errorMessage);
  //     });

  //   //console.log(name, pass);
  // };

  return (
    <div className="form mt-20">
      <h1 className="text-4xl underline text-white m-10">Log In Form</h1>
      <form
        className="pb-20"
        // onSubmit={handleForm}
      >
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-left text-white dark:text-gray-300"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-black border border-gray-300 text-white text-sm rounded-lg w-80 focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@name.com"
            required
          ></input>
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-left  text-white dark:text-gray-300"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="bg-black border w-80 border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            placeholder="Password"
          ></input>
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            ></input>
          </div>
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-white dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
        {/* {success && <p className="my-5 text-red-700">Logged In Successfully</p>}
        <p className="my-5 text-red-700">{error}</p> */}

        <p className="text-white my-5">
          <small className="mr-5">Don't have an account?</small>
          <Link to="/signup"> Sign Up</Link>
        </p>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/2 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
        <div className="flex justify-evenly pt-5">
          <span
            // onClick={handleBtn}
            className="text-white font-bold  cursor-pointer text-2xl"
          >
            Google
          </span>
          <span
            // onClick={handleBtn1}
            className="text-white font-bold  cursor-pointer text-2xl"
          >
            Github
          </span>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
