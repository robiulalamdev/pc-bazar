import { useSession } from "next-auth/react";
import Navbar from "../components/shared/Navbar";
import React from "react";
import { useRouter } from "next/router";

export default function PcBuilderPage({ categories }) {
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }
  // if (status === "unauthenticated") {
  //   router.push("/signin");
  // }
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
