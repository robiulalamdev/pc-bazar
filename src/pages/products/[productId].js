import Navbar from "@/components/shared/Navbar";
import React from "react";

export default function ProductById({ categories }) {
  return (
    <div>
      <Navbar categories={categories?.data} />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5000/products?id=${params.productId}`
  );
  const data = await res.json();
  return {
    props: {
      product: data,
    },
  };
};

// for server side rendering (SSG) with json-server data
export const getStaticProps = async () => {
  const res = await fetch(
    `https://pc-bazar.vercel.app/api/categories/all-categories`
  );
  const data = await res.json();
  return {
    props: {
      categories: data,
    },
  };
};
