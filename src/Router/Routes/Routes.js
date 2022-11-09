import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AllUserReviews from "../../Pages/AllUserReviews/AllUserReviews";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import AllServices from "../../Pages/Home/Services/AllServices";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Review from "../../Pages/Review/Review";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/review/:id',
        element: <PrivateRoute><Review></Review></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: '/servicedetails/:id',
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)

      },
      {
        path: '/allreviews',
        element: <AllUserReviews></AllUserReviews>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/allservice',
        element: <AllServices></AllServices>
      }

    ]
  }
]);


export default router;
