import { createBrowserRouter } from "react-router-dom";
import Products from "../pages/Products";
import Layout from "../pages/Layout";
import Checkout from "../pages/Checkout";
import ProductDetail from "../pages/ProductDetails";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Layout />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/products",
        element: (
          <div>
            <Products />
          </div>
        ),
      },
      {
        path: "/checkout",
        element: (
          <div>
            <Checkout />
          </div>
        ),
      },
      {
        path: "/product/:id",
        element: (
          <div>
            <ProductDetail />
          </div>
        ),
      },
    ],
  },
]);

export default router;
