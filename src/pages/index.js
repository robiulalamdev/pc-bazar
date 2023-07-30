import { useState } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });
import Navbar from "../components/shared/Navbar";
import Link from "next/link";
import ProductCard from "../components/cards/ProductCard";

import img1 from "../assets/banner-images/img5.png";
import img2 from "../assets/banner-images/img1.png";
import img3 from "../assets/banner-images/img2.png";
import img4 from "../assets/banner-images/img3.png";
import img5 from "../assets/banner-images/img4.png";
import img6 from "../assets/banner-images/banner.png";
import Slider from "react-slick";

const banners = [img1, img2, img3, img4, img5, img6];

export default function Home({ categories, products }) {
  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  return (
    <main>
      <Navbar categories={categories?.data} />
      <div className="min-h-screen max-w-[1480px] mx-auto px-4">
        <div>
          <Slider {...settings}>
            {banners?.map((img, i) => (
              <Image
                key={i}
                className="w-full h-80 md:h-[450px] object-fill"
                src={img}
                alt="banner"
              />
            ))}
          </Slider>
        </div>

        <section className="my-6">
          <div>
            <h1 className="text-center font-bold text-2xl text-gray-800">
              Featured Category
            </h1>
          </div>

          <div className="max-w-[1200px] mx-auto flex justify-center items-center flex-wrap gap-8 mt-4">
            {categories?.data?.map((cate, i) => (
              <Link href={`/categories/${cate?._id}`} key={i}>
                <div className="w-44 h-28 bg-white rounded-xl border flex flex-col justify-center items-center gap-2 hover:border-blue-600">
                  <Image
                    className="w-10 h-10"
                    src={cate?.icon}
                    alt="image"
                    width={1000}
                    height={1000}
                    responsive
                  />
                  <h1 className="font-bold text-gray-800">{cate?.category}</h1>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <section className="my-10">
          <div>
            <h1 className="text-center font-bold text-2xl text-gray-800">
              Featured Products
            </h1>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-4 px-4">
            {products?.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>
        </section>
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

  const res2 = await fetch(`https://pc-bazar.vercel.app/api/products/random`);
  const products = await res2.json();

  return {
    props: {
      categories: data,
      products: products?.data,
    },
  };
};
