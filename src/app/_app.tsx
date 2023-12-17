// _app.tsx
import { AppProps } from "next/app";
import React from "react";
import { FilterContextProvider } from "@/providers/FilterContextProvider"; // 替換成你的 Context 路徑

function MyApp({ Component, pageProps }:AppProps) {
  return (
    <FilterContextProvider>
      <Component {...pageProps} />
    </FilterContextProvider>
  );
}

export default MyApp;
