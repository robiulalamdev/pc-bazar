import { useSession } from "next-auth/react";
import Navbar from "../../components/shared/Navbar";
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../../assets/logo/logo.jpg";
import Link from "next/link";

export default function PcBuilderPage({ categories }) {
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (status === "unauthenticated") {
    router.push("/signin");
  }
  return (
    <div>
      <Navbar categories={categories?.data} />
      <div className="max-w-[1480px] mx-auto min-h-screen px-4 py-32">
        <div className="border border-gray-600 max-w-[1200px] w-full mx-auto h-fit">
          <div className="w-full h-14 bg-gray-100 flex items-center justify-center">
            <Image width={120} src={logo} alt="logo" />
          </div>
          <div className="p-1 md:p-4">
            <div className="w-full h-6 text-sm bg-slate-300 flex items-center px-4 mb-4">
              <p>Core Components</p>
            </div>
            {/* =-----------------components=----------------- */}
            <div className="h-fit w-full grid grid-cols-1 gap-2 border border-slate-500">
              {/* =-----------------items=----------------- */}

              <div className="flex md:flex-row flex-col md:items-center md:justify-between gap-2 bg-slate-50 p-2 border-b border-gray-400">
                <div className="flex items-start justify-start gap-2">
                  <Image
                    className="w-10 h-12"
                    width={120}
                    height={120}
                    src="https://cdn-icons-png.flaticon.com/128/2432/2432574.png"
                    alt="logo"
                  />
                  <div className="flex flex-col gap-1">
                    <h1 className="font-bold">CPU / Processor</h1>
                    <small>
                      Please click the Choose button and select your item
                    </small>
                  </div>
                </div>
                <Link
                  href={`/pc-builder/64c3552eccd6fd3337334d34`}
                  className="w-full md:w-28 h-8 bg-blue-600 hover:bg-blue-700 duration-300 flex justify-center items-center rounded"
                >
                  <h1 className="text-white font-semibold text-sm">Choose</h1>
                </Link>
              </div>

              <div className="flex md:flex-row flex-col md:items-center md:justify-between gap-2 bg-slate-50 p-2 border-b border-gray-400">
                <div className="flex items-start justify-start gap-2">
                  <Image
                    className="w-10 h-12"
                    width={120}
                    height={120}
                    src="https://cdn-icons-png.flaticon.com/128/10633/10633658.png"
                    alt="logo"
                  />
                  <div className="flex flex-col gap-1">
                    <h1 className="font-bold">Motherboard</h1>
                    <small>
                      Please click the Choose button and select your item
                    </small>
                  </div>
                </div>
                <Link
                  href={`/pc-builder/64c3552eccd6fd3337334d35`}
                  className="w-full md:w-28 h-8 bg-blue-600 hover:bg-blue-700 duration-300 flex justify-center items-center rounded"
                >
                  <h1 className="text-white font-semibold text-sm">Choose</h1>
                </Link>
              </div>

              <div className="flex md:flex-row flex-col md:items-center md:justify-between gap-2 bg-slate-50 p-2 border-b border-gray-400">
                <div className="flex items-start justify-start gap-2">
                  <Image
                    className="w-10 h-12"
                    width={120}
                    height={120}
                    src="https://cdn-icons-png.flaticon.com/128/543/543320.png"
                    alt="logo"
                  />
                  <div className="flex flex-col gap-1">
                    <h1 className="font-bold">RAM</h1>
                    <small>
                      Please click the Choose button and select your item
                    </small>
                  </div>
                </div>
                <Link
                  href={`/pc-builder/64c3552eccd6fd3337334d36`}
                  className="w-full md:w-28 h-8 bg-blue-600 hover:bg-blue-700 duration-300 flex justify-center items-center rounded"
                >
                  <h1 className="text-white font-semibold text-sm">Choose</h1>
                </Link>
              </div>

              <div className="flex md:flex-row flex-col md:items-center md:justify-between gap-2 bg-slate-50 p-2 border-b border-gray-400">
                <div className="flex items-start justify-start gap-2">
                  <Image
                    className="w-10 h-12"
                    width={120}
                    height={120}
                    src="https://cdn-icons-png.flaticon.com/128/2507/2507398.png"
                    alt="logo"
                  />
                  <div className="flex flex-col gap-1">
                    <h1 className="font-bold">Power Supply Unit</h1>
                    <small>
                      Please click the Choose button and select your item
                    </small>
                  </div>
                </div>
                <Link
                  href={`/pc-builder/64c3552eccd6fd3337334d37`}
                  className="w-full md:w-28 h-8 bg-blue-600 hover:bg-blue-700 duration-300 flex justify-center items-center rounded"
                >
                  <h1 className="text-white font-semibold text-sm">Choose</h1>
                </Link>
              </div>

              <div className="flex md:flex-row flex-col md:items-center md:justify-between gap-2 bg-slate-50 p-2 border-b border-gray-400">
                <div className="flex items-start justify-start gap-2">
                  <Image
                    className="w-10 h-12"
                    width={120}
                    height={120}
                    src="https://cdn-icons-png.flaticon.com/128/2696/2696730.png"
                    alt="logo"
                  />
                  <div className="flex flex-col gap-1">
                    <h1 className="font-bold">Storage Device</h1>
                    <small>
                      Please click the Choose button and select your item
                    </small>
                  </div>
                </div>
                <Link
                  href={`/pc-builder/64c3552eccd6fd3337334d38`}
                  className="w-full md:w-28 h-8 bg-blue-600 hover:bg-blue-700 duration-300 flex justify-center items-center rounded"
                >
                  <h1 className="text-white font-semibold text-sm">Choose</h1>
                </Link>
              </div>

              <div className="flex md:flex-row flex-col md:items-center md:justify-between gap-2 bg-slate-50 p-2 border-b border-gray-400">
                <div className="flex items-start justify-start gap-2">
                  <Image
                    className="w-10 h-12"
                    width={120}
                    height={120}
                    src="https://cdn-icons-png.flaticon.com/128/3474/3474360.png"
                    alt="logo"
                  />
                  <div className="flex flex-col gap-1">
                    <h1 className="font-bold">Monitor</h1>
                    <small>
                      Please click the Choose button and select your item
                    </small>
                  </div>
                </div>
                <Link
                  href={`/pc-builder/64c3552eccd6fd3337334d39`}
                  className="w-full md:w-28 h-8 bg-blue-600 hover:bg-blue-700 duration-300 flex justify-center items-center rounded"
                >
                  <h1 className="text-white font-semibold text-sm">Choose</h1>
                </Link>
              </div>

              <div className="flex md:flex-row flex-col md:items-center md:justify-between gap-2 bg-slate-50 p-2 border-b border-gray-400">
                <div className="flex items-start justify-start gap-2">
                  <Image
                    className="w-10 h-12"
                    width={120}
                    height={120}
                    src="https://cdn-icons-png.flaticon.com/128/10348/10348994.png"
                    alt="logo"
                  />
                  <div className="flex flex-col gap-1">
                    <h1 className="font-bold">Others</h1>
                    <small>
                      Please click the Choose button and select your item
                    </small>
                  </div>
                </div>
                <Link
                  href={`/pc-builder/64c3552eccd6fd3337334d3a`}
                  className="w-full md:w-28 h-8 bg-blue-600 hover:bg-blue-700 duration-300 flex justify-center items-center rounded"
                >
                  <h1 className="text-white font-semibold text-sm">Choose</h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
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

[
  {
    _id: "64c3552eccd6fd3337334d34",
    category: "CPU / Processor",
    icon: "https://cdn-icons-png.flaticon.com/128/2432/2432574.png",
  },
  {
    _id: "64c3552eccd6fd3337334d35",
    category: "Motherboard",
    icon: "https://cdn-icons-png.flaticon.com/128/10633/10633658.png",
  },
  {
    _id: "64c3552eccd6fd3337334d36",
    category: "RAM",
    icon: "https://cdn-icons-png.flaticon.com/128/543/543320.png",
  },
  {
    _id: "64c3552eccd6fd3337334d37",
    category: "Power Supply Unit",
    icon: "https://cdn-icons-png.flaticon.com/128/2507/2507398.png",
  },
  {
    _id: "64c3552eccd6fd3337334d38",
    category: "Storage Device",
    icon: "https://cdn-icons-png.flaticon.com/128/2696/2696730.png",
  },
  {
    _id: "64c3552eccd6fd3337334d39",
    category: "Monitor",
    icon: "https://cdn-icons-png.flaticon.com/128/3474/3474360.png",
  },
  {
    _id: "64c3552eccd6fd3337334d3a",
    category: "Others",
    icon: "https://cdn-icons-png.flaticon.com/128/10348/10348994.png",
  },
];
