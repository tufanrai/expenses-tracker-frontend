"use client";
import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const reactQueryProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const client = new QueryClient();
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default reactQueryProvider;
