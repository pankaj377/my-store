import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Products() {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });

  }, []);

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(
      search.toLowerCase()
    )
  );

  const clearSearch = () => {
    setSearch("");
  };

  return (
    <div className="container">

      <h2 className="page-title">
        All Products
      </h2>

      {/* SEARCH BAR */}

      <div className="search-container">

        <div className="search-box">

          <span className="search-icon">
            🔍
          </span>

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            className="search-input"
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          {search && (
            <button
              className="clear-btn"
              onClick={clearSearch}
            >
              ✖
            </button>
          )}

        </div>

      </div>

      {/* LOADING */}

      {loading && (
        <div className="loader"></div>
      )}

      {/* NO PRODUCTS */}

      {!loading && filtered.length === 0 && (
        <h3 className="no-data">
          No products found
        </h3>
      )}

      {/* PRODUCTS GRID */}

      <div className="grid">

        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </div>
  );
}

export default Products;