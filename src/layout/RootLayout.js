import { Footer } from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
}
