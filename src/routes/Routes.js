import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Addservice from "../components/addservice/Addservice";
import AllServices from "../components/allServices/AllServices";
import Blog from "../components/blogs/Blog";
import Footer from "../components/footer/Footer";

import Home from "../components/home/Home";
import Loader from "../components/Loader";
import LogIn from "../components/login/LogIn";
import Myreview from "../components/myreview/Myreview";
import Private from "../components/private/Private";
import SignIn from "../components/signin/SignIn";
import SingleService from "../components/singleService/SingleService";
import Main from "../layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },

      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/allservices",
        element: <AllServices></AllServices>,
      },
      {
        path: "/loading",
        element: <Loader></Loader>,
      },
      {
        path: "/myreview",
        element: (
          <Private>
            <Myreview></Myreview>
          </Private>
        ),
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "/addservice",
        element: <Addservice></Addservice>,
      },

      //   {
      //     path: "/cart",
      //     element: (
      //       <PrivateRoute>
      //         <Cart></Cart>
      //       </PrivateRoute>
      //     ),
      //   },
      {
        path: "/singleservice/:id",
        element: <SingleService></SingleService>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/singleservice/${params.id}`),
      },
      {
        path: "*",
        element: <h1 className="text-6xl text-center m-20">404 Not Found</h1>,
      },
    ],
  },
]);

export default router;
