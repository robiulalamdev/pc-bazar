import Navbar from "../../components/shared/Navbar";
import Image from "next/image";
import React from "react";

export default function ProductById({ categories, product }) {
  return (
    <>
      <Navbar categories={categories?.data} />
      <div className="max-w-[1480px] mx-auto px-4 py-32">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 border rounded-xl">
          <div className="w-80 h-60 mx-auto p-2">
            <Image
              className="w-full h-full mx-auto"
              src={product?.image}
              width={1000}
              height={1000}
              responsive
              alt="image"
            />
          </div>
          <div className="w-full border-t md:border-l md:border-t-0 p-2">
            <h1 className="text-xl font-bold text-gray-800">
              {product?.title}
            </h1>
            <div className="my-4">
              <p>Category: {product?.categoryName}</p>
              <p>Status: {product?.status}</p>
              <p>Rating: {product?.rating}</p>
              <p>Average Rating: {product?.averageRating}</p>
              <h1 className="font-bold text-rose-600 text-3xl">
                ${product?.price}
              </h1>
            </div>

            <div className="p-4 shadow rounded-md bg-blue-50">
              <h2 className="text-xl font-semibold mb-4">Key Features</h2>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(product?.keyFeatures)?.map(([key, value]) => (
                  <div key={key} className="flex flex-col">
                    <span className="text-gray-500">{key}</span>
                    <span className="font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="my-4">
              <h1 className="font-bold text-gray-800">Description</h1>

              <p className="mt-2">{product?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-bazar.vercel.app/api/products/single?productid=${params.productid}`
  );
  const data = await res.json();

  const res1 = await fetch(
    `https://pc-bazar.vercel.app/api/categories/all-categories`
  );
  const data1 = await res1.json();
  return {
    props: {
      product: data?.data,
      categories: data1,
    },
  };
};
