import Navbar from "../components/shared/Navbar";
import React from "react";

export default function PcBuilderPage({ categories }) {
  return (
    <div>
      <Navbar categories={categories?.data} />
      <div className="min-h-screen"></div>
    </div>
  );
}

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
