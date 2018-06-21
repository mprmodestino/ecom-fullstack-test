import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList({ items }) {
  return (
    <div className="u-container">
      <section className="c-product-list">
        {items.map((item, index) => <ProductItem key={index} item={item} />)}
      </section>
    </div>
  );
}
