import App from "../../App";
import ProductDetail from "../ProductDetail";
import NotFound from "../NotFound";
import Home from "../Home";
import ShoppingCart from "../ShoppingCart";
import Products from "../Products";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },

  {
    path: "products",
    element: <Products />,
  },
  {
    path: "productDetail:name",
    element: <ProductDetail />,
  },
  {
    path: "cart",
    element: <ShoppingCart />,
  },
];

export default routes;
