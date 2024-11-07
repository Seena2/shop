import { useState } from "react";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="product-detail">
      <h4>Product Detail</h4>
      <div className="product">
        <div className="product-image">
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
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
