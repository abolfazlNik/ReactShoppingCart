import { createBrowserRouter } from "react-router-dom";
import Products from "../pages/Products";
import Layout from "../pages/Layout";
import Checkout from "../pages/Checkout";
import ProductDetail from "../pages/ProductDetails";
import Todos from "../pages/Todos";
import App from "../App";
import Post from "../pages/Post";

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
      {
        path: "/todos",
        element: (
          <div>
            <Todos />
          </div>
        ),
      },
      {
        path: "/posts",
        element: (
          <div>
            <Post />
          </div>
        ),
      },
    ],
  },
]);

export default router;
