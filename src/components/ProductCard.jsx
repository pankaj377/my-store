import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {

  const { addToCart } = useCart();

  return (
    <div className="card">

      <img src={product.thumbnail} />

      <h3>{product.title}</h3>

      <p>${product.price}</p>

      <p>⭐ {product.rating}</p>

      <button
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>

      <Link to={`/product/${product.id}`}>
        View Details
      </Link>

    </div>
  );
}

export default ProductCard;