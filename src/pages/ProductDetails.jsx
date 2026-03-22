import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

function ProductDetails() {

  const { id } = useParams();

  const [product, setProduct] =
    useState(null);

  const { addToCart } = useCart();

  useEffect(() => {

    fetch(
      `https://dummyjson.com/products/${id}`
    )
      .then((res) => res.json())
      .then(setProduct);

  }, [id]);

  if (!product)
    return <h2>Loading...</h2>;

  return (
    <div className="container">

      <img src={product.thumbnail} />

      <h2>{product.title}</h2>

      <p>{product.description}</p>

      <h3>${product.price}</h3>

      <button
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>

    </div>
  );
}

export default ProductDetails;