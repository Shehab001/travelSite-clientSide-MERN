import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "../components/blogs/Blog";
import Footer from "../components/footer/Footer";

import Home from "../components/home/Home";
import LogIn from "../components/login/LogIn";
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

      //   {
      //     path: "/signup",
      //     element: <Signup></Signup>,
      //   },
      //   {
      //     path: "/courses",
      //     element: <Courses></Courses>,
      //   },
      //   {
      //     path: "/",
      //     element: <Carosol></Carosol>,
      //   },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      //   {
      //     path: "/purchase",
      //     element: <Success></Success>,
      //   },
      //   {
      //     path: "/cart",
      //     element: (
      //       <PrivateRoute>
      //         <Cart></Cart>
      //       </PrivateRoute>
      //     ),
      //   },
      //   {
      //     path: "/category/:id",
      //     element: <Card></Card>,
      //     loader: ({ params }) =>
      //       fetch(`https://brins-server.vercel.app/category/${params.id}`),
      //   },
      {
        path: "*",
        element: <h1 className="text-6xl text-center m-20">404 Not Found</h1>,
      },
    ],
  },
]);

export default router;
