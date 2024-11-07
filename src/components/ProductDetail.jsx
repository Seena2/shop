import { useState } from "react";

import styles from "../styles/ProductDetails.module.css";

const ProductDetail = ({ products, addToCart }) => {
  const [quantity, setQuantity] = useState(0);

  //const product = products.find(/* Logic to find the specific product */);

  return (
    <div className={styles.productDetail}>
      <h3>Product Detail</h3>
      <div className={styles.product}>
        {/* Image of the product */}
        <div className={styles.productImage}>
          <img src="" alt="" />
        </div>
        <div className="product-description">
          <h4>Product Title</h4>
          <p>price: $24.99</p>
          <p>
            <strong>description</strong>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sit
            illum optio! Impedit commodi voluptatem obcaecati doloribus
            reprehenderit eveniet officiis cum eius, dicta natus ad voluptatibus
            neque debitis, similique soluta.
          </p>
          <p>Qty: {quantity}</p>
          <button type="button" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
