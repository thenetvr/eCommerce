import ProductCard from "@/components/ProductCard";
import React from "react";

export default function Products() {
  // products
  const itemCount = 8;
  const item = {
    title: "New Item",
    description: "This is a new item",
    image:
      "https://i.pinimg.com/originals/b9/8b/b5/b98bb5fa80f4cf0bfde80b232c951b03.jpg",
    content:
      "Great things happen with this new item and it will continue to happen",
    footer: "This is the footer",
  };
  const products = [];
  for (let i = 0; i < itemCount; i++) {
    products.push(item);
  }

  // tailwind
  const gridCols =
    "grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1";
  const gap = "gap-5";
  const padding = "sm:p-20 p-5";

  return (
    <div className={`${gridCols} ${gap} ${padding}`}>
      {products.map((product, idx) => (
        <ProductCard
          key={idx}
          title={product.title}
          description={product.description}
          image={product.image}
          content={product.content}
          footer={product.footer}
        />
      ))}
    </div>
  );
}
