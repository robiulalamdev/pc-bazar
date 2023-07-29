import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="w-full h-fit bg-white rounded-xl border">
      <div className="w-60 h-60 mx-auto p-2">
        <Image
          className="w-full h-full mx-auto"
          src={product?.image}
          width={1000}
          height={1000}
          responsive
          alt="image"
        />
      </div>

      <div className="border-t p-2">
        <h1 className="text-xl font-bold text-gray-800">{product?.title}</h1>
        <div className="my-4">
          <p>Category: {product?.categoryName}</p>
          <p>Status: {product?.status}</p>
          <p>Rating: {product?.rating}</p>
        </div>
        <h1 className="font-bold text-rose-600">${product?.price}</h1>

        <Link
          href={`/products/${product?._id}`}
          className="w-full h-8 bg-blue-600 hover:bg-blue-700 duration-300 flex justify-center items-center rounded my-2"
        >
          <h1 className="text-white font-semibold">View Details</h1>
        </Link>
      </div>
    </div>
  );
}
