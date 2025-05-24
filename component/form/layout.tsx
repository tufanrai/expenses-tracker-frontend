"use client";
import React from "react";
import Providers from "@/provider/index.provider";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="w-full h-screen">
      <Toaster position="top-left" reverseOrder={false} />
      <Providers>{children}</Providers>
    </div>
  );
};

export default Layout;
