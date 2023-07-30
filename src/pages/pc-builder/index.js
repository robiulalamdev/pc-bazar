import { useSession } from "next-auth/react";
import Navbar from "../../components/shared/Navbar";
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../../assets/logo/logo.jpg";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  setBuildItemsCounter,
  setCpuProcessor,
  setMonitor,
  setMotherboard,
  setPowerSupply,
  setRam,
  setStorageDevice,
} from "../../redux/features/products/productSlice";
import { toast } from "react-toastify";

export default function PcBuilderPage({ categories }) {
  const { status } = useSession();
  const router = useRouter();
  const {
    cpuProcessor,
    motherboard,
    ram,
    powerSupply,
    storageDevice,
    monitor,
    buildItemsCounter,
  } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (status === "unauthenticated") {
    router.push("/signin");
  }

  const handleCompleteBuild = () => {
    dispatch(setCpuProcessor(null));
    dispatch(setMotherboard(null));
    dispatch(setRam(null));
    dispatch(setPowerSupply(null));
    dispatch(setStorageDevice(null));
    dispatch(setMonitor(null));

    dispatch(setBuildItemsCounter([]));

    toast.success("Congratulation! Complete Build", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div>
      <Navbar categories={categories?.data} />
      <div className="max-w-[1480px] mx-auto min-h-screen px-4 py-32 cursor-pointer">
        <div className="border border-gray-600 max-w-[1200px] w-full mx-auto h-fit">
          <div className="w-full h-14 bg-gray-100 flex items-center justify-center">
            <Image width={120} src={logo} alt="logo" />
          </div>
          <div className="p-1 md:p-4">
            <div className="w-full h-6 text-sm bg-slate-300 flex items-center px-4 mb-4">
              <p>Core Components</p>
            </div>
            {/* =-----------------components=----------------- */}
            <div className="h-fit w-full grid grid-cols-1 gap-8 border border-slate-500">
              {/* =-----------------items=----------------- */}

              <div className="h-fit w-full grid grid-cols-1 border border-slate-500">
                {cpuProcessor && (
                  <div className="flex md:flex-row flex-col md:items-center md:justify-between gap-2 bg-slate-200 p-2 border-b border-gray-400">
                    <div className="flex items-start justify-start gap-2">
                      <Image
                        className="w-10 h-12"
                        width={120}
                        height={120}
                        src={cpuProcessor?.image}
                        alt="logo"
                      />
                      <div className="flex flex-col gap-1">
                        <h1 className="font-bold">{cpuProcessor?.title}</h1>
                        <div className="flex items-center gap-2">
                          <small className="text-rose-600 font-bold inline">
                            ${cpuProcessor?.price}
                          </small>
                          <small className="text-gray-600 font-bold inline">
                            Model: {cpuProcessor?.keyFeatures?.model}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex md:flex-row flex-col md:items-center md:justify-between gap-2 bg-slate-200 p-2 border-b border-gray-400">
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
              </div>

              <div className="h-fit w-full grid grid-cols-1 border border-slate-500">
                {motherboard && (
                  <div className="flex md:flex-row flex-col md:items-center md:justify-between gap-2 bg-slate-200 p-2 border-b border-gray-400">
                    <div className="flex items-start justify-start gap-2">
                      <Image
                        className="w-10 h-12"
                        width={120}
                        height={120}
                        src={motherboard?.image}
                        alt="logo"
                      />
                      <div className="flex flex-col gap-1">
                        <h1 className="font-bold">{motherboard?.title}</h1>
                        <div className="flex items-center gap-2">
                          <small className="text-rose-600 font-bold inline">
                            ${motherboard?.price}
                          </small>
                          <small className="text-gray-600 font-bold inline">
                            Model: {motherboard?.keyFeatures?.model}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex md:flex-row flex-col md:items-center md:justify-between gap-2 bg-slate-200 p-2 border-b border-gray-400">
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
              </div>

              <div className="h-fit w-full grid grid-cols-1 border border-slate-500">
                {ram && (
                  <div className="flex md:flex-row flex-col md:items-center md:justify-between gap-2 bg-slate-200 p-2 border-b border-gray-400">
                    <div className="flex items-start justify-start gap-2">
                      <Image
                        className="w-10 h-12"
                        width={120}
                        height={120}
                        src={ram?.image}
                        alt="logo"
                      />
                      <div className="flex flex-col gap-1">
                        <h1 className="font-bold">{ram?.title}</h1>
                        <div className="flex items-center gap-2">
                          <small className="text-rose-600 font-bold inline">
                            ${ram?.price}
                          </small>
                          <small className="text-gray-600 font-bold inline">
                            Model: {ram?.keyFeatures?.model}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex md:flex-row flex-col md:items-center md:justify-between gap-2 bg-slate-200 p-2 border-b border-gray-400">
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
              </div>

              <div className="h-fit w-full grid grid-cols-1 border border-slate-500">
                {powerSupply && (
                  <div className="flex md:flex-row flex-col md:items-center md:justify-between gap-2 bg-slate-200 p-2 border-b border-gray-400">
                    <div className="flex items-start justify-start gap-2">
                      <Image
                        className="w-10 h-12"
                        width={120}
                        height={120}
                        src={powerSupply?.image}
                        alt="logo"
                      />
                      <div className="flex flex-col gap-1">
                        <h1 className="font-bold">{powerSupply?.title}</h1>
                        <div className="flex items-center gap-2">
                          <small className="text-rose-600 font-bold inline">
                            ${powerSupply?.price}
                          </small>
                          <small className="text-gray-600 font-bold inline">
                            Model: {powerSupply?.keyFeatures?.model}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex md:flex-row flex-col md:items-center md:justify-between gap-2 bg-slate-200 p-2 border-b border-gray-400">
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
              </div>

              <div className="h-fit w-full grid grid-cols-1 border border-slate-500">
                {storageDevice && (
                  <div className="flex md:flex-row flex-col md:items-center md:justify-between gap-2 bg-slate-200 p-2 border-b border-gray-400">
                    <div className="flex items-start justify-start gap-2">
                      <Image
                        className="w-10 h-12"
                        width={120}
                        height={120}
                        src={storageDevice?.image}
                        alt="logo"
                      />
                      <div className="flex flex-col gap-1">
                        <h1 className="font-bold">{storageDevice?.title}</h1>
                        <div className="flex items-center gap-2">
                          <small className="text-rose-600 font-bold inline">
                            ${storageDevice?.price}
                          </small>
                          <small className="text-gray-600 font-bold inline">
                            Model: {storageDevice?.keyFeatures?.model}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex md:flex-row flex-col md:items-center md:justify-between gap-2 bg-slate-200 p-2 border-b border-gray-400">
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
              </div>

              <div className="h-fit w-full grid grid-cols-1 border border-slate-500">
                {monitor && (
                  <div className="flex md:flex-row flex-col md:items-center md:justify-between gap-2 bg-slate-200 p-2 border-b border-gray-400">
                    <div className="flex items-start justify-start gap-2">
                      <Image
                        className="w-10 h-12"
                        width={120}
                        height={120}
                        src={monitor?.image}
                        alt="logo"
                      />
                      <div className="flex flex-col gap-1">
                        <h1 className="font-bold">{monitor?.title}</h1>
                        <div className="flex items-center gap-2">
                          <small className="text-rose-600 font-bold inline">
                            ${monitor?.price}
                          </small>
                          <small className="text-gray-600 font-bold inline">
                            Model: {monitor?.keyFeatures?.model}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex md:flex-row flex-col md:items-center md:justify-between gap-2 bg-slate-200 p-2 border-b border-gray-400">
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
              </div>

              {/* <div className="h-fit w-full grid grid-cols-1 border border-slate-500">
                {others && others?.length > 0 && (
                  <>
                    {others?.map((data, i) => (
                      <div
                        key={i}
                        className="flex md:flex-row flex-col md:items-center md:justify-between gap-2 bg-slate-200 p-2 border-b border-gray-400"
                      >
                        <div className="flex items-start justify-start gap-2">
                          <Image
                            className="w-10 h-12"
                            width={120}
                            height={120}
                            src={data?.image}
                            alt="logo"
                          />
                          <div className="flex flex-col gap-1">
                            <h1 className="font-bold">{data?.title}</h1>
                            <div className="flex items-center gap-2">
                              <small className="text-rose-600 font-bold inline">
                                ${data?.price}
                              </small>
                              <small className="text-gray-600 font-bold inline">
                                Model: {data?.keyFeatures?.model}
                              </small>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => dispatch(setOthers(null))}
                          className="w-full md:w-28 h-8 bg-white hover:bg-gray-100 duration-300 flex justify-center items-center rounded"
                        >
                          <h1 className="text-rose-600 font-semibold text-sm">
                            Cancel
                          </h1>
                        </button>
                      </div>
                    ))}
                  </>
                )}
                <div className="flex md:flex-row flex-col md:items-center md:justify-between gap-2 bg-slate-200 p-2 border-b border-gray-400">
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
              </div> */}
            </div>

            <button
              onClick={() => handleCompleteBuild()}
              className={`w-full  h-10  duration-300 flex justify-center items-center rounded mt-4
              ${
                buildItemsCounter?.length > 4
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-none"
              }`}
              disabled={buildItemsCounter?.length > 4 ? false : true}
            >
              <h1 className="text-white font-semibold text-sm">
                Complete Build
              </h1>
            </button>

            <p className="text-sm mt-2 text-rose-500">
              <strong>*</strong> This button will be disabled unless the user
              adds at least 5-6 of the mentioned components
            </p>
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
