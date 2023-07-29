import { Inter } from "next/font/google";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });
import banner1 from "../assets/images/banner1.jpg";
import Navbar from "@/components/shared/Navbar";

export default function Home({ categories }) {
  console.log(categories);
  return (
    <main>
      <Navbar categories={categories?.data} />
      <div className="min-h-screen">
        <Image className="w-full h-96" src={banner1} alt="banner" />

        <br />

        <div className="w-44 h-44 bg-white rounded-xl border flex flex-col justify-center items-center gap-2">
          <Image className="w-20 h-20" src={banner1} alt="image" />
          <h1 className="text-xl font-bold text-gray-800">Pawer Cable</h1>
        </div>
        <br />
        <br />
        <br />

        <div className="w-96 h-fit bg-white rounded-xl border">
          <div className="w-20 h-20 mx-auto p-2">
            <Image
              className="w-full h-full mx-auto"
              src={banner1}
              alt="image"
            />
          </div>

          <div className="border-t p-2">
            <h1 className="text-xl font-bold text-gray-800">Pawer Cable</h1>
            <h1 className="font-bold text-rose-600">$5454</h1>
          </div>
        </div>

        <br />
        <br />
      </div>
    </main>
  );
}

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
