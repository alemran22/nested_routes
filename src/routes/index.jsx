import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";

import Root from "../Root/Root";
import SingleProduct from "../pages/SingleProduct";
import ContactUs from "../pages/ContactUs";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "single-product/:productID",
        element: <SingleProduct />,
        loader: ({ params }) => {
          return fetch(
            `https://fakestoreapi.com/products/${params.productID}`
          ).then((res) => res.json());
        },
      },
    ],
  },
]);
export default routers;
