import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Contact from "../pages/contact";
import Root from "../Root/root";
import SingleProduct from "../pages/SingleProduct";

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
        element: <Contact />,
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
