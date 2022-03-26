import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { FingerPrint } from "../components/FingerPrint";
import { Header } from "../components/Header";
import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <FingerPrint />
      {/* <Header /> */}
      {/* <Component {...pageProps} />; */}
    </>
  );
}

export default MyApp;
