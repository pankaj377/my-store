import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">

      <div className="hero">

        <h1>Welcome to MyStore</h1>

        <p>Best Products Online</p>

        <Link to="/products">
          <button>
            Shop Now
          </button>
        </Link>

      </div>

    </div>
  );
}

export default Home;