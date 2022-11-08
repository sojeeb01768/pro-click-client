import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Review from "../../Pages/Review/Review";

const router = createBrowserRouter([
    {
      path: '/',
      element:<Main></Main>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/review/:id',
          element:<Review></Review>,
          loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        }
      ]
    }
  ]);


  export default router;
