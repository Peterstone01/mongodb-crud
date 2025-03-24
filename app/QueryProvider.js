"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
// Create a client
const queryClient = new QueryClient();
const QueryProviders = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProviders;
