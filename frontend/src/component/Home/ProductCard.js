import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Rating } from "@material-ui/lab";

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    size: "small",
    precision: 0.5,
    readOnly: true,
  };

  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <Rating {...options} />{" "}
        <span className="productCardSpan">
          ({product.numOfReviews} Reviews)
        </span>
      </div>
      <span>{`${product.price} Tk.`}</span>
    </Link>
  );
};

export default ProductCard;
