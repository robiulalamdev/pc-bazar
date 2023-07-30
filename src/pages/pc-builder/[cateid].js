import React from "react";
import Navbar from "../../components/shared/Navbar";
import ReactStars from "react-stars";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import {
  setCpuProcessor,
  setMonitor,
  setMotherboard,
  setPowerSupply,
  setRam,
  setStorageDevice,
} from "../../redux/features/products/productSlice";

const ChoosePage = ({ products, categories }) => {
  const { status } = useSession();
  const router = useRouter();
  const dispatch = useDispatch();

  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (status === "unauthenticated") {
    router.push("/signin");
  }

  const handleAddToBuilder = (product) => {
    if (product?.categoryName === "CPU / Processor") {
      dispatch(setCpuProcessor(product));
    } else if (product?.categoryName === "Motherboard") {
      dispatch(setMotherboard(product));
    } else if (product?.categoryName === "RAM") {
      dispatch(setRam(product));
    } else if (product?.categoryName === "Power Supply Unit") {
      dispatch(setPowerSupply(product));
    } else if (product?.categoryName === "Storage Device") {
      dispatch(setStorageDevice(product));
    } else if (product?.categoryName === "Monitor") {
      dispatch(setMonitor(product));
    }

    router.back();
  };

  return (
    <div>
      <Navbar categories={categories.data} />
      <div className="min-h-screen">
        <div className="max-w-[1480px] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 min-h-screen pt-32 bg-slate-50 px-4">
          {products.map((product, i) => (
            <div key={i} className="w-full h-fit bg-white rounded-xl border">
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
                <h1 className="text-xl font-bold text-gray-800">
                  {product?.title}
                </h1>
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
                <div className="my-4">
                  <p>Category: {product?.categoryName}</p>
                  <p>Status: {product?.status}</p>
                </div>
                <h1 className="font-bold text-rose-600">${product?.price}</h1>

                <button
                  onClick={() => handleAddToBuilder(product)}
                  className="w-full h-8 bg-blue-600 hover:bg-blue-700 duration-300 flex justify-center items-center rounded my-2"
                >
                  <h1 className="text-white font-semibold">Add To Builder</h1>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
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
