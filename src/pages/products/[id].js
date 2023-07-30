import Navbar from "../../components/shared/Navbar";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-stars";
import { setReviewMessage } from "../../redux/features/products/productSlice";
import { useSession } from "next-auth/react";
import { usePostReviewMutation } from "../../redux/features/products/productApi";

export default function ProductDetails({ categories, product, reviews }) {
  const { data: userData } = useSession();
  const { reviewMessage } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [postReview, { isLoading }] = usePostReviewMutation();
  const [count, setCount] = useState(0);
  console.log(count);

  const handleSendReview = async () => {
    const newReview = {
      message: reviewMessage,
      user: userData?.user?._id,
      product: product?._id,
      rating: count,
    };

    const options = {
      data: newReview,
    };

    const data = await postReview(options);
  };

  console.log(reviewMessage);
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
              <div className="flex items-center gap-2">
                <p>Rating: {}</p>
                <ReactStars
                  // count={}
                  edit={false}
                  size={24}
                  color2={"#ffd700"}
                  value={parseInt(product?.rating)}
                />
              </div>
              <div className="flex items-center gap-2">
                <p>Average Rating: {}</p>
                <ReactStars
                  // count={}
                  edit={false}
                  size={24}
                  color2={"#ffd700"}
                  value={parseInt(
                    product?.averageRating > 0 ? product?.averageRating : 3
                  )}
                />
              </div>
              <div className="flex items-center gap-2">
                <p>Individual Rating: {}</p>
                <ReactStars
                  // count={}
                  edit={false}
                  size={24}
                  color2={"#ffd700"}
                  value={4.5}
                />
              </div>
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

        <div>
          <h1>Add Review</h1>
          <div>
            <ReactStars
              // count={}
              edit={true}
              size={24}
              onChange={(e) => setCount(e)}
              color2={"#ffd700"}
              value={count}
            />
          </div>
          <div className="flex justify-between items-center gap-2">
            <input
              type="text"
              onChange={(e) => dispatch(setReviewMessage(e.target.value))}
              className="border border-gray-500 h-10 w-full rounded-sm px-4"
              placeholder="Enter Your Review Message"
            />
            <button
              onClick={() => handleSendReview()}
              className="w-20 h-10 bg-blue-600 hover:bg-blue-700 duration-300 flex justify-center items-center rounded my-2"
            >
              <h1 className="text-white font-semibold">Send</h1>
            </button>
          </div>
          <div className="mt-4 max-h-[800px] overflow-y-scroll mb-6">
            {reviews?.map((review, i) => (
              <div
                key={i}
                className="grid grid-cols-1 gap-1 items-center mb-5 bg-[#e2e8f0]"
              >
                <p className="p-2">{review?.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-bazar.vercel.app/api/products/single?productid=${params.id}`
  );
  const data = await res.json();

  const res1 = await fetch(
    `https://pc-bazar.vercel.app/api/categories/all-categories`
  );
  const data1 = await res1.json();

  const reviewsRes = await fetch(
    `https://pc-bazar.vercel.app/api/reviews/post-get?productid=${params?.id}`
  );
  const reviewsData = await reviewsRes.json();

  return {
    props: {
      product: data?.data,
      categories: data1,
      reviews: reviewsData.data,
    },
  };
};
