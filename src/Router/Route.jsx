import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Details from "../pages/Details/Details";
  
const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: async () => {
              const res = await fetch('/categories.json');
              const categories = await res.json();
              return categories;
            }
        },
        {
            path: "/donation",
            element: <Donation></Donation>
        },
        {
            path: "/statistics",
            element: <Statistics></Statistics>,
            loader: async () => {
              const res = await fetch('/categories.json');
              const donationData = await res.json();
              return donationData;
            }
        },
        {
          path: "/categories/:id",
          element: <Details></Details>,
          loader: async () => {
            const res = await fetch('/categories.json');
            const categories = await res.json();
            return categories;
          }
        }
      ]
    },
  ]);

export default router;