import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { FingerPrint } from "../components/FingerPrint";
import { Header } from "../components/Header";
import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <FingerPrint />
      ) : (
        <>
          <Header />
          <Component {...pageProps} />;
        </>
      )}
    </>
  );
}

export default MyApp;
