import { useCart } from "../context/CartContext";

function Checkout() {

  const { totalPrice } = useCart();

  const handleSubmit = (e) => {

    e.preventDefault();

    alert("Order Placed!");

  };

  return (
    <div className="container">

      <h2>Checkout</h2>

      <form onSubmit={handleSubmit}>

        <input
          placeholder="Name"
          required
        />

        <input
          placeholder="Address"
          required
        />

        <input
          placeholder="Phone"
          required
        />

        <select>

          <option>
            Cash on Delivery
          </option>

          <option>
            UPI
          </option>

        </select>

        <h3>
          Total: ${totalPrice}
        </h3>

        <button>
          Place Order
        </button>

      </form>

    </div>
  );
}

export default Checkout;