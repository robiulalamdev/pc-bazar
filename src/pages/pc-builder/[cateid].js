import React from "react";
import Navbar from "../../components/shared/Navbar";

const ChoosePage = ({ products, categories }) => {
  return (
    <div>
      <Navbar categories={categories.data} />
      <div className="min-h-screen"></div>
    </div>
  );
};

export default ChoosePage;

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
