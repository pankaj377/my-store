import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {

  const { cart } = useCart();

  return (
    <nav className="navbar">

      {/* Logo / Title */}

      <h2 className="logo">
        <Link to="/">
          MyStore
        </Link>
      </h2>

      {/* Navigation Links */}

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/products">
          Products
        </Link>

        <Link to="/cart">
          Cart
          <span className="cart-count">
            ({cart.length})
          </span>
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;