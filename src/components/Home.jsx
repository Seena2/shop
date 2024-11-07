import { useState } from "react";
import Header from "./Header";
import ProductDetail from "./ProductDetail";
import { Outlet } from "react-router-dom";
const Home = () => {
  const [cartItems, setCartItems] = useState([
    /*List of items in the cart*/
  ]);

  /* some custom hook that fetches products and returns the fetched products */
  const products = "fetched products";

  const addToCart = () => {
    // add to cart logic (this adds to cartItems)
  };

  return (
    <div className="home-page">
      <Header cartItemsCount={cartItems.length} />
      <ProductDetail addToCart={addToCart} products={products} />
      <Outlet />
    </div>
  );
};

export default Home;
