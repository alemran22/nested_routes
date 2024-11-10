import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routers from "./routes/index.jsx";
import ProductContextProvider from "./context/ProductContext.jsx";

createRoot(document.getElementById("root")).render(
  <ProductContextProvider>
    <RouterProvider router={routers} />
  </ProductContextProvider>
);
