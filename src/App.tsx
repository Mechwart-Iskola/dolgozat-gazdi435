import ProductCard from "./components/ProductCard";
import React, { useEffect, useState } from "react";
import "./App.css";
import { Product } from "./types/types.";

function App() {



  const [products, setProducts]= useState<Product[]>([]);

  useEffect(() => {
    fetch("./products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  console.log(products);

  function TermeketKeres(): React.MouseEventHandler<HTMLButtonElement> | undefined {
    return (event) => {
      event.preventDefault();
      const searchTerm = (document.querySelector('input') as HTMLInputElement).value.toLowerCase();
      const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
      );
      setFilteredProducts(filteredProducts);
    };
  }

  return (
    <div className="product-card">
      <h1>Product Information</h1>
      <div className="search-section">
        <h1>Enter product name</h1>
        <input type="text" className="search-text" />
        <button onClick={TermeketKeres()} type="button">Keresés</button>
      </div>
      <div className="results-section">

        {(products.length !== 0) ? filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        )) : <h1 className="error">No product found with the given name.</h1>
        }
      </div>


    </div>
  );
}

export default App; 