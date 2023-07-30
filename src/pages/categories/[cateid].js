import ProductCard from "../../components/cards/ProductCard";
import Navbar from "../../components/shared/Navbar";
import React from "react";

export default function CateByProduct({ products, categories }) {
  console.log(products);
  return (
    <>
      <Navbar categories={categories?.data} />
      <div className="max-w-[1480px] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 min-h-screen pt-32 bg-slate-50 px-4">
        {products.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-bazar.vercel.app/api/products/products-by-cateid?cateId=${params.cateid}`
  );
  const data = await res.json();

  const res1 = await fetch(
    `https://pc-bazar.vercel.app/api/categories/all-categories`
  );
  const data1 = await res1.json();
  return {
    props: {
      products: data?.data,
      categories: data1,
    },
  };
};
