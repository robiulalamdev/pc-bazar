import React from "react";

export default function CateByProduct({ products }) {
  console.log(products);
  return <div>CateByProduct</div>;
}

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-bazar.vercel.app/api/products/products-by-cateid?cateId=${params.cateId}`
  );
  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
};
