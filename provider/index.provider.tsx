import React from "react";
import ReactQueryProvider from "@/provider/react.provider";

const Providers = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </div>
  );
};

export default Providers;
