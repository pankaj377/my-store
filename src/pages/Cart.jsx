import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {

  const {
    cart,
    removeFromCart,
    updateQuantity,
    totalPrice,
    clearCart
  } = useCart();

  const handleRemove = (id) => {

    const confirmDelete =
      window.confirm(
        "Are you sure you want to remove this item?"
      );

    if (confirmDelete) {
      removeFromCart(id);
    }

  };

  return (
    <div className="container">

      <h2>Your Cart</h2>

      {/* EMPTY CART */}

      {cart.length === 0 && (
        <h3 className="empty-cart">
          Your cart is empty
        </h3>
      )}

      {/* CART ITEMS */}

      {cart.map((item) => (

        <div
          key={item.id}
          className="cart-item"
        >

          <div>

            <h3>{item.title}</h3>

            <p>
              Price: ${item.price}
            </p>

          </div>

          <div className="cart-controls">

            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) =>
                updateQuantity(
                  item.id,
                  Number(e.target.value)
                )
              }
            />

            {/* REMOVE BUTTON */}

            <button
              className="remove-btn"
              onClick={() =>
                handleRemove(item.id)
              }
            >
              Remove
            </button>

          </div>

        </div>

      ))}

      {/* TOTAL */}

      {cart.length > 0 && (
        <div className="total-box">

          <h2>
            Total: ${totalPrice}
          </h2>

          <div className="cart-actions">

            <button
              className="clear-btn-cart"
              onClick={clearCart}
            >
              Clear Cart
            </button>

            <Link to="/checkout">

              <button className="checkout-btn">
                Checkout
              </button>

            </Link>

          </div>

        </div>
      )}

    </div>
  );
}

export default Cart;